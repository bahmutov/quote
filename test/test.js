gt.module('quote');

var quote = require('..');

gt.test('quotes a string', function () {
  gt.equal(quote(''), '""');
  gt.equal(quote('foo'), '"foo"');
  gt.equal(quote(quote('foo')), '"foo"');
});
