// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 02


// ===== E.g. 1 =====

var x = 1

console.log("x is originally " + x)

setTimeout( function() {
    x = 99
    console.log("x has been changed, and is now " + x)
}, 3000)

console.log("x is " + x) // this line prints immediately ater the first console.log, with x still 1
// x is changed to 99 only after 3 secs
// Note that this may cause issues if we expect lines to execute immediately after async function


// ===== E.g. 2 =====
// To ensure that multiple async functions occur in sequence, we need to nest them
// It is not guaranteed which async function will run first if we do not do nesting


// --- E.g. 2.1 Nesting to run specific setTimeout() one after another ---
var x = 1

console.log("x is originally " + x)

setTimeout( function() {
    x = 99
    console.log("x has been changed, and is now " + x)
    setTimeout( function() {
        x = 42
        console.log("x has been changed, and is now " + x)
        setTimeout( function() {
            x = 1000000
            console.log("x has been changed, and is now " + x)
        }, 3000)
    }, 3000)
}, 3000)

console.log("x is " + x)


// --- E.g. 2.2 it is not guaranteed which setTimeout() will run first ---
var x = 1

console.log("x is originally " + x)

setTimeout( function() {
    x = 99
    console.log("x has been changed, and is now " + x)
}, 3000)

setTimeout( function() {
    x = 42
    console.log("x has been changed, and is now " + x)
}, 3000)

setTimeout( function() {
    x = 1000000
    console.log("x has been changed, and is now " + x)
}, 3000)

console.log("x is " + x)