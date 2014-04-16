
// For Node.js
if (typeof process !== 'undefined') {
  define(function(require) {

    var test = require('../test')
    test.next()

  })}
else {
  define(function(require) {

    var test = require('../test')

    var a = require('./a')

    test.assert(a.a === 'a' && a.a2 === 'a2', 'a should be { a: "a", a2: "a2" }')
    test.next()

  })}

