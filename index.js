'use strict'

var check = require('syntax-error')
var stackTrace = require('stack-trace');
var fs = require('fs')

var file = __dirname + '/foo.js';
var src = fs.readFileSync(file);
var err = check(src, file);
var trace = stackTrace.parse(err);
console.log(trace)


//////////////////////////////////////
// Below one has proper stack trace //
//////////////////////////////////////

// var error = new Error('Syntax error')
// var trace = stackTrace.parse(error);
// console.log(trace);