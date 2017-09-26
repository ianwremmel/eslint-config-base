'use strict';

module.exports = {
  rules: {
    //
    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    //
    'for-direction': 'error',
    'getter-return': 'error',
    // 'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': [
      'error',
      'except-parens'
    ],
    // 'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [
      'error',
      'all',
      {conditionalAssign: false}
    ],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'valid-jsdoc': [
      'error',
      {
        matchDescription: undefined,
        prefer: {
          arg: 'param',
          argument: 'param',
          fires: 'emits',
          return: 'returns',
          virtual: 'abstract'
        },
        preferType: {
          object: 'Object',
          function: 'Function',
          Boolean: 'boolean',
          Number: 'number',
          String: 'string'
        },
        requireReturn: false,
        requireReturnType: false,
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ]
  }
};
