'use strict';

/* eslint-env node */
/* eslint-disable no-unused-vars */
/* global Promise: false */

var a = 5;
var z;

switch (a) {
  case 1:
    break;
  case 2:
    break;
  default:

}

Promise
  .then();

/**
 * @param {number} x
 * @returns {Object}
 */
function f(x) {
  return x;
}

a.b();
a.b()
  .c();
a.b()
  .c()
  .d();

/**
 * This is a comment that's kinda long and isn't allowed to continue past the 80
 * character mark
 */
z = 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5 && 1 && 2 && 3 && 4 && 5;
