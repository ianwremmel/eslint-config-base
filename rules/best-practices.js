'use strict';

module.exports = {
  rules: {
    //
    // Best Practices
    // https://eslint.org/docs/rules/#best-practices
    //
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    // warning for now: getters are a useful way to create read-only static
    // properties without pulling in babel. (e.g. have a getter on an http error
    // for the status code)
    'class-methods-use-this': 'warn',
    complexity: [
      'error',
      10
    ],
    'consistent-return': 'error',
    curly: [
      'error',
      'all'
    ],
    'default-case': 'error',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': [
      'error',
      {allowKeywords: true}
    ],
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        allow: [
          '!!'
        ]
      }
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    // This is a good one for certain types of projects, but in general, is
    // rather inconvenient.
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': [
      'error',
      {builtinGlobals: true}
    ],
    'no-restricted-properties': 'off',
    'no-return-assign': [
      'error',
      'always'
    ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    radix: 'error',
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: [
      'error',
      'never'
    ]
  }
};
