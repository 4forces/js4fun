// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 03

// === PRACTICE CODE ===

// // this function tests for a condition and calls (returns) the
//   // result of func1 or func2 (note the () after func1 and func2)
// function doIf(condition, func1, func2) {
//   if (condition) {
//     func1()
//   } else {
//     func2()
//   }
// }

// this function tests for a condition and calls (returns) the
   // result of func1 or func2 (note the () after func1 and func2)
      // this step initiates the 'ifElse' function
function ifElse(condition, func1, func2) {
  if (condition) {
    func1()
  } else {
    func2()
  }
}

var x = 1

// this step sets passes arguments to 'ifElse' function
    // note anonymous functions are passed as 2nd (func1) and 3rd (func2) arguments
ifElse(x === 1, function() {
  console.log("x is 1") // gets passed to 'func1'
}, function() {
  console.log("x is not 1") // gets passed to 'func2'
})


// === ORIGINAL CODE ===
function doIf(condition, func) {
  if (condition) {
    func()
  }
}