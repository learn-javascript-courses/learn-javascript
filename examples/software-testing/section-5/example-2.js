'use strict';

var
  test = require('tape'),
  sum = require('sum');

test('`sum()`', function (assert) {

  // Poor description:
  assert.equal(sum(3,5), 8,
    '3 + 5 should be 8.');

  // Better:
  assert.equal(sum(3,5), 8,
    '`sum()` should return the sum of two numbers.');

  assert.end();
});
