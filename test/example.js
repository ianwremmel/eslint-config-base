'use strict';

/* eslint-env node */
/* eslint-disable no-unused-vars */
/* global Promise: false */

var a = 5;
var y, z;

switch (a) {
  case 1:
    break;
  case 2:
    break;
  default:

}

Promise
  .resolve();

/**
 * @param {number} x
 * @returns {Object}
 */
function f(x) {
  return x;
}

y = {
  b: function b() {
    return {
      c: function c() {
        return {
          d: function d() {
            return true;
          }
        };
      }
    };
  }
};

y.b();
y.b()
  .c();
y.b()
  .c()
  .d();

/**
 * This is a comment that's kinda long and isn't allowed to continue past the 80
 * character mark
 */
z = 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5;
