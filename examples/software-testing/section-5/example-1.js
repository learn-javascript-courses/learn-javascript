'use strict';

var test = require('tape');

test('Async testing: `.plan()`', function (assert) {
    assert.plan(2);

    assert.equal(typeof Date.now, 'function',
      'Date.now should be a function');

    var start = Date.now();

    setTimeout(function () {
        assert.ok(Date.now() - start >= 100,
          'Should wait at least 100ms');
    }, 100);
});
