// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02


// === PRACTICE CODE ===
// initiates callWith2Args function
function callWith2Args(arg1, arg2, func) {
  return func(arg1, arg2)
}

// --- passing named function as 2nd argument to callWith2Args---
callWith2Args(1,2,add)
callWith2Args(9,4,subtract)

// --- passing anonymous function as argument ---
  // sets callWith2Args function to working parameters
callWith2Args(2,4, function(){
  return x * x + y
})


// === ORIGINAL CODE ===
function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}
