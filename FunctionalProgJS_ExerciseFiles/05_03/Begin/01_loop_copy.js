// Learning Functional Programming with Javascript
// Chapter 05, Video 03, Exercise 01

// ===== Exercise code 1 =====

function loop(i) {
    console.log("i is " + 1)
    if (i > 0) { // condition to execute: if 'i' greater than zero
        loop(i - 1) // perform action: perform loop() with arg 'i - 1', basically this is a count-down
    }
}

loop(10)

// ===== Exercise code 2 =====

function loop(i) {
    console.log("i is " + i)
    if (i < 10) { // condition to continue execute: if 'i' less than 10
        loop(i + 1) // count up at each iteration
    }
}

loop(0)
