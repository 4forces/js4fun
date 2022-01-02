// Learning Functional Programming with Javascript
// Chapter 04, Video 03, Exercise 01

// ===== Working code =====

var fs = require('fs') // fs is standard lib in nodeJS to work with the FileSystem

var fileContents

fs.readFile('message.txt', 'utf8', function(err, data) { // 'data' contains what is read from 'message.txt'
  if (err) throw err
  fileContents = data
  // console.log("async run console.log: " + fileContents) // this line works fine and AFTER sync since it is within the fxn
})

console.log("non-async run: " + fileContents) //this line will return 'undefined'. This is because
// fileContents = data occurs before 'data' is extracted from 'message.txt'
// this is because fs.readFile is async, i.e. moves on to next line despite
// still running and not complete


// ===== Original code =====

// var fs = require('fs') // fs is standard lib in nodeJS to work with the FileSystem

// fs.readFile('message.txt', 'utf8', function(err, data) { // 'data' contains what is read from 'message.txt'
//   if (err) throw err
//   console.log(data)
// })
