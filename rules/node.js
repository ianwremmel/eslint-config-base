'use strict';

module.exports = {
  rules: {
    //
    // Node.js and CommonJS
    // https://eslint.org/docs/rules/#nodejs-and-commonjs
    //
    'callback-return': 'error',
    // global require seems like more trouble than it's worth. At this point, I
    // think it's fair to allow non-global requires, with the intent of relying
    // more heavily on import/export
    'global-require': 'off',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'error'
  }
};
