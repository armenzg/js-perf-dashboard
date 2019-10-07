export const dataToChartJSformat = (data = []) => data.map(({ datetime, value }) => ({
  x: datetime,
  y: value,
}));

export const addPunctuationToNumbers = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const chartJsOptions = (reverse, scaleLabel) => ({
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          displayFormats: {
            hour: 'MMM D',
          },
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          callback: (value) => addPunctuationToNumbers(value),
          beginAtZero: false,
          reverse,
        },
        scaleLabel: {
          display: true,
          labelString: scaleLabel,
        },
      },
    ],
  },
});

export const generateChartJsOptions = (meta, yLabel) => {
  const higherIsBetter = (meta.lower_is_better === false);
  const reversed = higherIsBetter;
  const label = yLabel || (higherIsBetter ? 'Score' : 'Execution time (ms)');
  return chartJsOptions(reversed, label);
};
