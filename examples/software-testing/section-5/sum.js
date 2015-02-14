'use strict';

module.exports = function sum() {
  var
    args = [].slice.call(arguments),
    result = 0;

  while (args.length) {
    result += args.shift();
  }

  return result;
};
