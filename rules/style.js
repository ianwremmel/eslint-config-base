'use strict';

module.exports = {
  rules: {
    //
    // Stylistic Issues
    // https://eslint.org/docs/rules/#stylistic-issues
    //
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 1
      }
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-element-newline': [
      'error',
      'always'
    ],
    'block-spacing': [
      'error',
      'never'
    ],
    'brace-style': [
      'error',
      'stroustrup',
      {allowSingleLine: true}
    ],
    camelcase: [
      'error',
      {properties: 'never'}
    ],
    'capitalized-comments': 'off',
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-this': [
      'error',
      'self'
    ],
    'eol-last': 'error',
    'func-call-spacing': [
      'error',
      'never'
    ],
    'func-name-matching': [
      'error',
      'always'
    ],
    'func-names': 'error',
    'func-style': [
      'error',
      'declaration'
    ],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    indent: [
      'error',
      2,
      {
      // Honestly, I don't care where switch cases go, but most editors seem to
      // indent them differently from the eslint default, so I'm overriding the
      // default here.
        SwitchCase: 1,
        // This is the default, I'm just really excited it's finally
        // an available rule.
        MemberExpression: 1
      }
    ],
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': 'error',
    'line-comment-position': [
      'error',
      {position: 'above'}
    ],
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'max-depth': [
      'error',
      5
    ],
    'max-len': [
      'error',
      {
        code: 1024,
        comments: 80
      }
    ],
    'max-lines': 'off',
    'max-nested-callbacks': [
      'error',
      3
    ],
    'max-params': [
      'error',
      4
    ],
    'max-statements': [
      'error',
      30
    ],
    'max-statements-per-line': [
      'error',
      {max: 1}
    ],
    'multiline-ternary': [
      'error',
      'never'
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        capIsNewExceptions: [
          'S',
          '^express\\.Router$'
        ]
      }
    ],
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {ignoreChainWithDepth: 1}
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': [
      'error',
      {max: 2}
    ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': [
      'error',
      {allowForLoopAfterthoughts: true}
    ],
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
      'error',
      'below'
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3
        }
      }
    ],
    'object-curly-spacing': [
      'error',
      'never'
    ],
    'object-property-newline': 'error',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': [
      'error',
      'none'
    ],
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'error',
      'single'
    ],
    'require-jsdoc': 'off',
    semi: [
      'error',
      'always'
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'sort-keys': 'error',
    'sort-vars': 'error',
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [
          '!'
        ],
        markers: [
          '**',
          '**!'
        ]
      }
    ],
    'template-tag-spacing': [
      'error',
      'never'
    ],
    'unicode-bom': 'error',
    'wrap-regex': 'off'
  }
};
