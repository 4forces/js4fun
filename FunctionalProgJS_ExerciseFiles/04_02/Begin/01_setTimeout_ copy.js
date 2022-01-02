// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 01

// using a simple build-in function setTimeout() to demo callback
// setTimeout() is usually used for pop-ups or cycling thru slide shows

console.log('Before setTimeout')

setTimeout( function () {
    console.log("The function has been executed")
}, 3000) // 3000 is duration in miliseconds

console.log('After setTimeout') // This line still executes because
// setTimeout is an async fxn (means execution continues) although
// last line is still not done