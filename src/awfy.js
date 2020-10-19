import { PROJECT, ALT_PROJECT } from './utils/perfherder';

const TALOS_FRAMEWORK_ID = 1;
const RAPTOR_FRAMEWORK_ID = 10;
const JSBENCH_FRAMEWORK_ID = 11;
const BROWSERTIME_FRAMEWORK_ID = 13;

const COLORS = {
  chrome: '#0B84A5',
  chromium: '#9DD866',
  fennec: '#9DD866',
  geckoview: '#6F4E7C',
  fenix: '#FFA056',
  firefox: '#FFA056',
};

export const BENCHMARKS = {
  'assorted-dom': {
    compare: {
      'raptor-assorted-dom-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-assorted-dom-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-chromium',
        option: 'opt',
      },
    },
    label: 'Assorted DOM',
  },
  kraken: {
    compare: {
      kraken: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'kraken',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
    },
    label: 'Kraken',
  },
  'motionmark-animometer': {
    compare: {
      'raptor-motionmark-animometer-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-motionmark-animometer-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-chromium',
        option: 'opt',
      },
      'raptor-motionmark-animometer-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-chrome',
        option: 'opt',
      },
    },
    label: 'MotionMark Animometer',
  },
  'motionmark-htmlsuite': {
    compare: {
      'raptor-motionmark-htmlsuite-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-motionmark-htmlsuite-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-chromium',
        option: 'opt',
      },
      'raptor-motionmark-htmlsuite-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-chrome',
        option: 'opt',
      },
    },
    label: 'MotionMark HtmlSuite',
  },
  speedometer: {
    compare: {
      'raptor-speedometer-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-speedometer-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-chromium',
        option: 'opt',
      },
      'raptor-speedometer-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-chrome',
        option: 'opt',
      },
    },
    label: 'Speedometer',
  },
  stylebench: {
    compare: {
      'raptor-stylebench-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-stylebench-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-chromium',
        option: 'opt',
      },
      'raptor-stylebench-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-chrome',
        option: 'opt',
      },
    },
    label: 'StyleBench',
  },
  sunspider: {
    compare: {
      'raptor-sunspider-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-sunspider-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-chromium',
        option: 'opt',
      },
      'raptor-sunspider-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-chrome',
        option: 'opt',
      },
    },
    label: 'SunSpider',
  },
  webaudio: {
    compare: {
      'raptor-webaudio-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-webaudio-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-chromium',
        option: 'opt',
      },
      'raptor-webaudio-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-chrome',
        option: 'opt',
      },
    },
    label: 'WebAudio',
  },
  'unity-webgl': {
    compare: {
      'raptor-unity-webgl-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-unity-webgl-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-chromium',
        option: 'opt',
      },
    },
    label: 'Unity WebGL',
  },
  displaylist_mutate: {
    compare: {
      'displaylist-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'displaylist_mutate',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
    },
    label: 'Displaylist mutate',
  },
  glvideo: {
    compare: {
      glvideo: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'glvideo',
        project: ALT_PROJECT,
        test: 'Mean tick time across 100 ticks: ',
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
    },
    label: 'Gl Video',
  },
  rasterflood_gradient: {
    compare: {
      rasterflood_gradient: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_gradient',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
    },
    label: 'Rasterflood (Gradient)',
  },
  rasterflood_svg: {
    compare: {
      rasterflood: {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: TALOS_FRAMEWORK_ID,
        suite: 'rasterflood_svg',
        project: ALT_PROJECT,
        option: 'opt',
        extraOptions: ['e10s', 'stylo'],
      },
    },
    label: 'Rasterflood SVG',
  },
  'wasm-misc': {
    compare: {
      'raptor-wasm-misc-firefox': {
        color: COLORS.firefox,
        label: 'Firefox (tiering)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-firefox',
        option: 'opt',
      },
      'raptor-wasm-misc-baseline-firefox': {
        color: 'red',
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-baseline-firefox',
        option: 'opt',
      },
      'raptor-wasm-misc-ion-firefox': {
        color: 'brown',
        label: 'Firefox (wasm-ion)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-ion-firefox',
        option: 'opt',
      },
      'raptor-wasm-misc-cranelift-firefox': {
        color: 'yellow',
        label: 'Firefox (wasm-cranelift)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-cranelift-firefox',
        option: 'opt',
      },
      'raptor-wasm-misc-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-chromium',
        option: 'opt',
      },
    },
    colors: [COLORS.firefox, 'red', 'brown', COLORS.chromium, COLORS.chrome],
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-ion)', 'Chromium'],
    label: 'WebAssembly Embenchen',
  },
  'wasm-godot': {
    compare: {
      'raptor-wasm-godot-firefox': {
        color: COLORS.firefox,
        label: 'Firefox (tiering)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-wasm-godot-baseline-firefox': {
        color: 'red',
        label: 'Firefox (wasm-baseline)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-baseline-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-wasm-godot-ion-firefox': {
        color: 'brown',
        label: 'Firefox (wasm-ion)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-ion-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-wasm-godot-cranelift-firefox': {
        color: 'yellow',
        label: 'Firefox (wasm-cranelift)',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-cranelift-firefox',
        option: 'opt',
      },
      'raptor-wasm-godot-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-chromium',
        option: 'opt',
      },
      'raptor-wasm-godot-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-godot-chrome',
        option: 'opt',
      },
    },
    colors: [COLORS.firefox, 'red', 'brown', COLORS.chromium, COLORS.chrome],
    labels: ['Firefox (tiering)', 'Firefox (wasm-baseline)', 'Firefox (wasm-ion)', 'Chromium', 'Chrome'],
    label: 'WebAssembly Godot',
  },
  'ares6-jsshell': {
    compare: {
      'ares6-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'ares6-v8': {
        color: COLORS.chromium,
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Ares6 (JS shell)',
  },
  ares6: {
    compare: {
      'raptor-ares6-firefox': {
        color: COLORS.firefox,
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-firefox',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'raptor-ares6-chromium': {
        color: COLORS.chromium,
        label: 'Chromium',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-chromium',
        option: 'opt',
      },
      'raptor-ares6-chrome': {
        color: COLORS.chrome,
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-ares6-chrome',
        option: 'opt',
      },
    },
    label: 'Ares6',
  },
  octane: {
    compare: {
      'octane-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'octane-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'octane-v8': {
        color: COLORS.chromium,
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'octane-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Octane (JS shell)',
  },
  'six-speed': {
    compare: {
      'six-speed-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'six-speed-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'six-speed-v8': {
        color: COLORS.chromium,
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'six-speed-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Six Speed (JS shell)',
  },
  'sunspider-jsbench': {
    compare: {
      'sunspider-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'sunspider-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey'],
    label: 'Sun Spider (JS shell)',
  },
  'web-tooling': {
    compare: {
      'web-tooling-benchmark-sm': {
        color: COLORS.firefox,
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'web-tooling-benchmark-sm',
        project: ALT_PROJECT,
        option: 'opt',
      },
      'web-tooling-benchmark-v8': {
        color: COLORS.chromium,
        label: 'Chromium v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'web-tooling-benchmark-v8',
        option: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chromium v8'],
    label: 'Web Tooling (JS shell)',
  },
  'speedometer-android': {
    compare: {
      fennec: {
        color: COLORS.fennec,
        label: 'Fennec',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'fennec',
        extraOptions: ['fennec'],
      },
      geckoview: {
        color: COLORS.geckoview,
        label: 'GeckoView',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'geckoview',
        extraOptions: ['geckoview'],
      },
      fenix: {
        color: COLORS.fenix,
        label: 'Fenix',
        frameworkId: BROWSERTIME_FRAMEWORK_ID,
        suite: 'speedometer',
        option: 'opt',
        application: 'fenix',
        extraOptions: ['fenix'],
      },
    },
    label: 'Speedometer',
  },
};

const DESKTOP_SITES = {
  apple: 'Apple',
  amazon: 'Amazon',
  bing: 'Bing',
  docs: 'Google Docs',
  ebay: 'Ebay',
  facebook: 'Facebook',
  fandom: 'Fandom',
  google: 'Google',
  'google-mail': 'Google Mail',
  imdb: 'IMDb',
  imgur: 'Imgur',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  microsoft: 'Microsoft',
  netflix: 'Netflix',
  office: 'Office',
  outlook: 'Outlook',
  paypal: 'PayPal',
  pinterest: 'Pinterest',
  reddit: 'Reddit',
  sheets: 'Google Sheets',
  slides: 'Google Slides',
  twitch: 'Twitch',
  twitter: 'Twitter',
  tumblr: 'Tumblr',
  wikipedia: 'Wikipedia',
  yandex: 'Yandex',
  'yahoo-mail': 'Yahoo Mail',
  'yahoo-news': 'Yahoo News',
  youtube: 'YouTube',
};

const DEFAULT_SUITES = [
  'ares6',
  'displaylist_mutate',
  'glvideo',
  'kraken',
  'motionmark-animometer',
  'motionmark-htmlsuite',
  'rasterflood_gradient',
  'rasterflood_svg',
  'speedometer',
  'stylebench',
  'sunspider',
  'webaudio',
  'wasm-godot',
];

Object.keys(DESKTOP_SITES).forEach((key) => {
  const suite = `tp6-${key}`;
  BENCHMARKS[`tp6-${key}`] = { compare: {}, label: `Tp6 ${DESKTOP_SITES[key]}` };
  ['Firefox', 'Chromium', 'Chrome'].forEach((app) => {
    BENCHMARKS[suite].compare[app.toLowerCase()] = {
      color: COLORS[app.toLowerCase()],
      label: app,
      frameworkId: RAPTOR_FRAMEWORK_ID,
      suite: `raptor-${suite}-${app.toLowerCase()}`,
      option: 'opt',
    };
  });
  DEFAULT_SUITES.push(suite);
});

const MOBILE_APPS = {
  'chrome-m': 'Chrome',
  fenix: 'Fenix',
  fennec: 'Fennec',
  geckoview: 'GeckoView',
};

const MOBILE_SITES = {
  allrecipes: 'All Recipes',
  amazon: 'Amazon',
  'amazon-search': 'Amazon Search',
  bbc: 'BBC',
  bing: 'Bing',
  'bing-restaurants': 'Bing Restaurants',
  booking: 'Booking',
  cnn: 'CNN',
  'cnn-ampstories': 'CNN AMP Stories',
  'ebay-kleinanzeigen': 'Ebay Kleinanzeigen',
  'ebay-kleinanzeigen-search': 'Ebay Kleinanzeigen Search',
  espn: 'ESPN',
  'facebook-cristiano': 'Facebook (Cristiano)',
  facebook: 'Facebook',
  google: 'Google',
  'google-maps': 'Google Maps',
  'google-restaurants': 'Google Restaurants',
  imdb: 'IMDb',
  instagram: 'Instagram',
  jianshu: 'Jianshu',
  'microsoft-support': 'Microsoft Support',
  reddit: 'Reddit',
  stackoverflow: 'StackOverflow',
  'web-de': 'Web De',
  wikipedia: 'Wikipedia',
  youtube: 'YouTube',
  'youtube-watch': 'YouTube Watch',
};

const MOBILE_SUITES = [
  'speedometer-android',
];

Object.keys(MOBILE_SITES).forEach((siteKey) => {
  const bmKey = `tp6m-${siteKey}`;
  BENCHMARKS[bmKey] = { compare: {}, label: `Tp6 ${MOBILE_SITES[siteKey]}` };
  Object.keys(MOBILE_APPS).forEach((appKey) => {
    BENCHMARKS[bmKey].compare[appKey] = {
      color: COLORS[appKey],
      label: MOBILE_APPS[appKey],
      frameworkId: BROWSERTIME_FRAMEWORK_ID,
      suite: siteKey,
      application: appKey,
      option: 'opt',
      extraOptions: ['cold'],
    };
    if (!['fenix', 'chrome-m'].includes(appKey)) {
      BENCHMARKS[bmKey].compare[appKey].project = ALT_PROJECT;
    }
  });
  MOBILE_SUITES.push(bmKey);
});

export const CONFIG = {
  default: {
    landingPath: '/win10/overview?numDays=60',
    dayRange: 60, // # days
    colors: [COLORS.firefox, COLORS.chromium, COLORS.chrome],
    labels: ['Firefox', 'Chromium', 'Chrome'],
  },
  dayRange: [1, 2, 7, 14, 30, 60, 90, 365],
  views: {
    linux64: {
      label: 'Linux 64bit',
      platforms: ['linux64-shippable'],
      benchmarks: DEFAULT_SUITES
        .concat([
          'assorted-dom', 'ares6-jsshell', 'octane', 'six-speed',
          'sunspider-jsbench', 'unity-webgl', 'wasm-misc',
          'web-tooling']),
    },
    mac: {
      label: 'Mac OS X',
      platforms: ['macosx1014-64-shippable'],
      benchmarks: DEFAULT_SUITES,
    },
    win7: {
      label: 'Windows 7 32bit',
      platforms: ['windows7-32-shippable'],
      benchmarks: DEFAULT_SUITES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platforms: ['windows10-64-shippable'],
      benchmarks: DEFAULT_SUITES,
    },
    win10ref2017: {
      label: 'Windows 10 64bit (2017 reference laptop)',
      platforms: ['windows10-64-ux', 'windows10-64-ref-hw-2017'],
      benchmarks: DEFAULT_SUITES,
      project: PROJECT,
    },
    androidMotoG5: {
      label: 'Android (Moto G5)',
      platforms: ['android-hw-g5-7-0-arm7-api-16', 'android-hw-g5-7-0-arm7-api-16-shippable'],
      benchmarks: MOBILE_SUITES,
    },
    androidPixel2: {
      label: 'Android (Pixel 2)',
      platforms: ['android-hw-p2-8-0-android-aarch64', 'android-hw-p2-8-0-android-aarch64-shippable'],
      benchmarks: MOBILE_SUITES,
    },
  },
};

// Upper limit for the time range slider measured in days
export const TIMERANGE_UPPER_LIMIT = 365;


const processSeries = (seriesConfig, viewConfig) => {
  const result = [];
  // We can have the project property configured on the view
  const overwrittenProject = viewConfig.project ? { project: viewConfig.project } : {};
  // The Android benchmarks have a platform defined per series
  if (!seriesConfig.platform) {
    const { platforms } = viewConfig;
    platforms.forEach((pf) => {
      const newSeriesConfig = { ...seriesConfig, ...overwrittenProject };
      newSeriesConfig.platform = pf;
      result.push(newSeriesConfig);
    });
  } else {
    result.push({ ...seriesConfig, ...overwrittenProject });
  }
  return result;
};

// Given a view configuration return a data structure with the data
// structure needed to query Treeherder
export const queryInfo = (viewConfig, benchmark) => {
  const info = {};
  const { benchmarks } = viewConfig;
  if (benchmark === 'overview' && benchmarks) {
    benchmarks.forEach((configUID) => {
      info[configUID] = {
        compare: [],
        benchmarkUID: configUID,
        includeSubtests: false,
        label: BENCHMARKS[configUID].label,
        yLabel: BENCHMARKS[configUID].yLabel,
      };
      // We need to set the platform for fetching data from Treeherder
      Object.values(BENCHMARKS[configUID].compare).forEach((seriesConfig) => {
        const oneOrMoreSeries = processSeries(seriesConfig, viewConfig);
        info[configUID].compare = info[configUID].compare.concat(oneOrMoreSeries);
      });
    });
  } else {
    Object.values(BENCHMARKS[benchmark].compare).forEach((seriesConfig) => {
      if (!info[benchmark]) {
        info[benchmark] = {
          compare: [],
          benchmarkUID: benchmark,
          includeSubtests: true,
          label: BENCHMARKS[benchmark].label,
          yLabel: BENCHMARKS[benchmark].yLabel,
        };
      }
      const oneOrMoreSeries = processSeries(seriesConfig, viewConfig);
      info[benchmark].compare = info[benchmark].compare.concat(oneOrMoreSeries);
    });
  }

  return info;
};

export default {
  queryInfo, BENCHMARKS, CONFIG, TIMERANGE_UPPER_LIMIT,
};
