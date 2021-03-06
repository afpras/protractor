var env = require('../environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'jasmine2',

  specs: [
    'baseCase/single_failure_spec1.js',
    'baseCase/single_failure_spec2.js'
  ],

  multiCapabilities: [{
    'browserName': 'chrome',
    maxInstances: 2,
    shardTestFiles: true
  }],

  baseUrl: env.baseUrl,

  jasmineNodeOpts: {
    isVerbose: true,
    showTiming: true,
    defaultTimeoutInterval: 90000
  }

};
