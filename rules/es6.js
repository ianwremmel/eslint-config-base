'use strict';

module.exports = {
  rules: {
    //
    // ECMAScript 6
    // https://eslint.org/docs/rules/#ecmascript-6
    //
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'arrow-parens': [
      'error',
      'always'
    ],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'constructor-super': 'error',
    'generator-star-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': [
      'error',
      'never'
    ],
    'sort-imports': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': [
      'error',
      'never'
    ],
    'yield-star-spacing': [
      'error',
      'after'
    ]
  }
};
