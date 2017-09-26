'use strict';

module.exports = {
  rules: {
    //
    // Variables
    // https://eslint.org/docs/rules/#variables
    //
    'init-declarations': 'off',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false,
        variables: true
      }
    ]
  }
};
