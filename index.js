'use strict'

var check = require('syntax-error')
var stackTrace = require('stack-trace');
var fs = require('fs')
var http = require('http')

http.createServer(function (req,res) {

})

var file = __dirname + '/foo.js';
var src = fs.readFileSync(file);
var err = check(src, file);

var errorsArray = err.toString().split("\n")
var stack = file + ":" + err.line + ":" + err.column
err.stack = err.toString() + "\n at "+errorsArray[2]+" ("+stack+")"
var trace = stackTrace.parse(err);
console.log(trace)

//////////////////////////////////////
// Below one has proper stack trace //
//////////////////////////////////////

// var error = new Error('Syntax error')
// var trace = stackTrace.parse(error);
// console.log(trace);