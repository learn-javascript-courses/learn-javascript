'use strict';

var test = require('tape');

test('Demonstrate `console.error()` for debugging', function (assert) {

  console.log('This may not be seen.');

  console.error('But this will! =)');

  assert.ok('Yay!',
    'It is possible to debug tests using `console.error()`.');

  assert.end();

});
