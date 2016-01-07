/**
 * Imports
 */

var setAttribute = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var div = document.createElement('div')

  t.equal(div.getAttribute('test'), null)
  setAttribute(div, 'test', 'val')
  t.equal(div.getAttribute('test'), 'val')
  t.end()
})
