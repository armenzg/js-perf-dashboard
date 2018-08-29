const RAPTOR_FRAMEWORK_ID = 10;
const JSBENCH_FRAMEWORK_ID = 11;

export const BENCHMARKS = {
  'assorted-dom': {
    compare: {
      'raptor-assorted-dom-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-firefox',
        buildType: 'opt',
      },
      'raptor-assorted-dom-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-assorted-dom-chrome',
        buildType: 'opt',
      },
    },
    label: 'Assorted DOM',
  },
  'motionmark-animometer': {
    compare: {
      'raptor-motionmark-animometer-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-firefox',
        buildType: 'opt',
      },
      'raptor-motionmark-animometer-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-chrome',
        buildType: 'opt',
      },
    },
    label: 'MotionMark Animometer',
  },
  'motionmark-htmlsuite': {
    compare: {
      'raptor-motionmark-htmlsuite-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-firefox',
        buildType: 'opt',
      },
      'raptor-motionmark-htmlsuite-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-chrome',
        buildType: 'opt',
      },
    },
    label: 'MotionMark HtmlSuite',
  },
  speedometer: {
    compare: {
      'raptor-speedometer-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-firefox',
        buildType: 'opt',
      },
      'raptor-speedometer-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-chrome',
        buildType: 'opt',
      },
    },
    label: 'Speedometer',
  },
  stylebench: {
    compare: {
      'raptor-stylebench-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-firefox',
        buildType: 'opt',
      },
      'raptor-stylebench-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-chrome',
        buildType: 'opt',
      },
    },
    label: 'StyleBench',
  },
  sunspider: {
    compare: {
      'raptor-sunspider-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-firefox',
        buildType: 'opt',
      },
      'raptor-sunspider-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-chrome',
        buildType: 'opt',
      },
    },
    label: 'SunSpider',
  },
  webaudio: {
    compare: {
      'raptor-webaudio-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-firefox',
        buildType: 'opt',
      },
      'raptor-webaudio-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-chrome',
        buildType: 'opt',
      },
    },
    label: 'WebAudio',
  },
  'unity-webgl': {
    compare: {
      'raptor-unity-webgl-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-firefox',
        buildType: 'opt',
      },
      'raptor-unity-webgl-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-chrome',
        buildType: 'opt',
      },
    },
    label: 'Unity WebGL',
  },
  'wasm-misc': {
    compare: {
      'raptor-wasm-misc-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-firefox',
        buildType: 'opt',
      },
      'raptor-wasm-misc-baseline-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-baseline-firefox',
        buildType: 'opt',
      },
      'raptor-wasm-misc-ion-firefox': {
        color: '#e55525',
        label: 'Firefox',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-ion-firefox',
        buildType: 'opt',
      },
      'raptor-wasm-misc-chrome': {
        color: '#ffcd02',
        label: 'Chrome',
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-chrome',
        buildType: 'opt',
      },
    },
    colors: ['#e55525', 'red', 'brown', '#ffcd02'],
    labels: ['Firefox', 'Firefox (baseline)', 'Firefox (Ion)', 'Chrome'],
    label: 'Wasm Miscellaneous',
  },
  ares6: {
    compare: {
      'ares6-sm': {
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-sm',
        buildType: 'opt',
      },
      'ares6-v8': {
        color: '#ffcd02',
        label: 'Chrome v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'ares6-v8',
        buildType: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chrome v8'],
    label: 'Ares6 (JS shell)',
  },
  'six-speed': {
    compare: {
      'six-speed-sm': {
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'six-speed-sm',
        buildType: 'opt',
      },
      'six-speed-v8': {
        color: '#ffcd02',
        label: 'Chrome v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'six-speed-v8',
        buildType: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chrome v8'],
    label: 'Six Speed (JS shell)',
  },
  'sunspider-jsbench': {
    compare: {
      'sunspider-sm': {
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'sunspider-sm',
        buildType: 'opt',
      },
    },
    labels: ['SpiderMonkey'],
    label: 'Sun Spider (JS shell)',
  },
  'web-tooling': {
    compare: {
      'web-tooling-benchmark-sm': {
        color: '#e55525',
        label: 'SpiderMonkey',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'web-tooling-benchmark-sm',
        buildType: 'opt',
      },
      'web-tooling-benchmark-v8': {
        color: '#ffcd02',
        label: 'Chrome v8',
        frameworkId: JSBENCH_FRAMEWORK_ID,
        suite: 'web-tooling-benchmark-v8',
        buildType: 'opt',
      },
    },
    labels: ['SpiderMonkey', 'Chrome v8'],
    label: 'Web Tooling (JS shell)',
  },
};

const DEFAULT_SUITES = [
  'assorted-dom',
  'motionmark-animometer',
  'motionmark-htmlsuite',
  'speedometer',
  'stylebench',
  'sunspider',
  'webaudio',
];

export const CONFIG = {
  default: {
    landingPath: 'win10/overview',
    colors: ['#e55525', '#ffcd02'],
    labels: ['Firefox', 'Chrome'],
  },
  platforms: {
    linux64: {
      label: 'Linux 64bit',
      platform: 'linux64',
      benchmarks: DEFAULT_SUITES
        .concat([
          'ares6', 'six-speed', 'sunspider-jsbench', 'web-tooling',
          'unity-webgl', 'wasm-misc']),
    },
    mac: {
      label: 'Mac OS X',
      platform: 'osx-10-10',
      benchmarks: DEFAULT_SUITES
        .filter(e => e !== 'assorted-dom'),
    },
    win7: {
      label: 'Windows 7 32bit',
      platform: 'windows7-32',
      benchmarks: DEFAULT_SUITES,
    },
    win10: {
      label: 'Windows 10 64bit',
      platform: 'windows10-64',
      benchmarks: DEFAULT_SUITES,
    },
  },
};
