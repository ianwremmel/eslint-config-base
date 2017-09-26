'use strict';

module.exports = {
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/node',
    './rules/style',
    './rules/es6',
    './rules/mocha'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script'
  },
  plugins: [
    'mocha'
  ]
};
