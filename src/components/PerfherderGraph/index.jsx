import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { withStyles } from '@material-ui/core/styles';
import { parse } from 'query-string';
import queryPerfData from '@mozilla-frontend-infra/perf-goggles';
import Loadable from 'react-loadable';
import Loading from '../Loading';
import { generateChartJsOptions, dataToChartJSformat } from '../../utils/prepareData';
import { convertToSeconds } from '../../utils/timeRangeUtils';

const ChartJSWrapper = Loadable({
  loader: () => import(/* webpackChunkName: 'ChartJSWrapper' */ '../ChartJSWrapper'),
  loading: Loading,
});

const sortOverviewFirst = (a, b) => {
  if (a.overview) {
    return -1;
  }
  if (b.overview) {
    return 1;
  }
  return a.title <= b.title ? -1 : 1;
};

const styles = () => ({
  benchmarkTitle: {
    display: 'inline-block',
    margin: 10,
  },
  linkIcon: {
    marginBottom: -5,
  },
});

const options = (dayRange, includeSubtests) => ({
  timeRange: convertToSeconds(dayRange), includeSubtests,
});

class PerferhderGraph extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    extraLink: PropTypes.string,
    dayRange: PropTypes.number.isRequired,
    includeSubtests: PropTypes.bool,
    series: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      frameworkId: PropTypes.number.isRequired,
      option: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    extraLink: undefined,
    includeSubtests: false,
  };

  state = {
    data: {},
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { dayRange, includeSubtests, series } = this.props;
    if (
      dayRange !== prevProps.dayRange
      || includeSubtests !== prevProps.includeSubtests
      || series !== prevProps.series
    ) {
      this.fetchData();
    }
  }

  fetchData() {
    let chartJsOptions;
    const {
      series, dayRange, includeSubtests, title,
    } = this.props;
    this.setState({ data: {} });
    series.forEach(async (config) => {
      // XXX: Not using a wrapping Promise.all() causes the graphs in the
      // overview to load sequentially
      const response = await queryPerfData(config, options(dayRange, includeSubtests));

      // We can have multiple subtests for a single call to queryPerfData
      Object.values(response).forEach(({ data, meta, perfherderUrl }) => {
        if (!chartJsOptions) {
          chartJsOptions = generateChartJsOptions(meta);
        }
        const graphUid = meta.test || `${title}-overview`;
        // Considering includeSubtests is because glvideo has the 'test' property set
        const graphTitle = !includeSubtests ? title : meta.test || title;
        const dataStructure = {
          chartJsData: { datasets: [] },
          chartJsOptions,
          jointUrl: perfherderUrl,
          title: graphTitle,
        };
        if (!meta.test) {
          dataStructure.overview = true;
        }
        this.setState((state) => {
          if (!state.data[graphUid]) {
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid] = dataStructure;
          } else {
            // We need to merge two different perfherder URLs
            // We're joining the different series for each subbenchmark
            const parsedUrl = parse(perfherderUrl);
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid].jointUrl += `&series=${parsedUrl.series}`;
          }
          let combined = false;
          // This is useful when we want to combine different series. For instance, a benchmark
          // changes the platform on which it runs, thus, requirying to merge data from both
          state.data[graphUid].chartJsData.datasets.forEach((dataset) => {
            if (dataset.label === config.label) {
              // eslint-disable-next-line no-param-reassign
              dataset.data = dataset.data.concat(dataToChartJSformat(data));
              combined = true;
            }
          });
          if (!combined) {
            state.data[graphUid].chartJsData.datasets.push({
              label: config.label,
              backgroundColor: config.color,
              data: dataToChartJSformat(data),
            });
          }
          return state;
        });
      });
    });
  }

  render() {
    const { classes, extraLink } = this.props;
    const { data } = this.state;
    return (
      Object.values(data).sort(sortOverviewFirst).map(({
        chartJsData, chartJsOptions, jointUrl, title, overview,
      }) => (
        <div key={title}>
          <h2 className={classes.benchmarkTitle}>{title}</h2>
          <a href={jointUrl} target="_blank" rel="noopener noreferrer">
            <LinkIcon className={classes.linkIcon} />
          </a>
          {extraLink && overview ? (
            <Link to={extraLink} rel="noopener noreferrer">
              <ArrowDownward className={classes.linkIcon} />
            </Link>
          ) : null}
          <ChartJSWrapper
            chartJsData={chartJsData}
            chartJsOptions={chartJsOptions}
          />
        </div>
      ))
    );
  }
}

export default withStyles(styles)(PerferhderGraph);
