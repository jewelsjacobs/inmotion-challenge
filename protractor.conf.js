'use strict';

exports.config = {

    baseUrl: 'http://localhost:3000',

    directConnect: true,

    mochaOpts: {
        reporter: 'spec',
        timeout: 4000
    },

    specs: ['test/e2e/spec.js'],

    framework: 'mocha'

};
