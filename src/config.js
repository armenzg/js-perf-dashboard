const RAPTOR_FRAMEWORK_ID = 10;

export const BENCHMARKS = {
  'motionmark-animometer': {
    compare: [
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-animometer-chrome',
        buildType: 'opt',
      },
    ],
    label: 'MotionMark Animometer',
  },
  'motionmark-htmlsuite': {
    compare: [
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-motionmark-htmlsuite-chrome',
        buildType: 'opt',
      },
    ],
    label: 'MotionMark HtmlSuite',
  },
  speedometer: {
    compare: [
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-speedometer-chrome',
        buildType: 'opt',
      },
    ],
    label: 'Speedometer',
  },
  stylebench: {
    compare: [
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-stylebench-chrome',
        buildType: 'opt',
      },
    ],
    label: 'StyleBench',
  },
  sunspider: {
    compare: [
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-sunspider-chrome',
        buildType: 'opt',
      },
    ],
    label: 'SunSpider',
  },
  webaudio: {
    compare: [
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-webaudio-chrome',
        buildType: 'opt',
      },
    ],
    label: 'WebAudio',
  },
  'unity-webgl': {
    compare: [
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-unity-webgl-chrome',
        buildType: 'opt',
      },
    ],
    label: 'Unity WebGL',
  },
  'wasm-misc': {
    compare: [
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-baseline-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-ion-firefox',
        buildType: 'opt',
      },
      {
        frameworkId: RAPTOR_FRAMEWORK_ID,
        suite: 'raptor-wasm-misc-chrome',
        buildType: 'opt',
      },
    ],
    colors: ['#e55525', 'red', 'brown', '#ffcd02'],
    labels: ['Firefox', 'Firefox (baseline)', 'Firefox (Ion)', 'Chrome'],
    label: 'Wasm Miscellaneous',
  },
};

const DEFAULT_SUITES = [
  'motionmark-animometer',
  'motionmark-htmlsuite',
  'speedometer',
  'stylebench',
  'webaudio',
];

export const CONFIG = {
  default: {
    landingPath: 'win10/motionmark-animometer',
    colors: ['#e55525', '#ffcd02'],
    labels: ['Firefox', 'Chrome'],
  },
  platforms: {
    linux64: {
      label: 'Linux 64bit',
      platform: 'linux64',
      benchmarks: DEFAULT_SUITES.concat('unity-webgl', 'wasm-misc').sort(),
    },
    mac: {
      label: 'Mac OS X',
      platform: 'osx-10-10',
      benchmarks: DEFAULT_SUITES,
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
