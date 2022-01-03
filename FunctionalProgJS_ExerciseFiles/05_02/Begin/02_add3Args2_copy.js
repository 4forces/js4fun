// Learning Functional Programming with Javascript
// Chapter 05, Video 02, Exercise 02

// ===== working code =====
function add(x, y, z) {
  return x + y + z
}

function partiallyApply(func, x, y) { // 'y' is moved from next line to here
  return function(z) {  // 'y' is moved from here to line above
    return func(x, y, z)
  }
}

var add5and2 = partiallyApply(add, 5, 2) // '2' is plug in to the newly created 'y' argument

console.log(add5and2(3)) // arg '5' and '2' are already incorporated, with the remaining arg 3 input here
console.log(add(5, 2, 3)) // this line returns the same result as above. Used when all args can be passed at same time


// ===== original code =====
function add(x, y, z) {
  return x + y + z
}

function partiallyApply(func, x) {
  return function(y, z) {
    return func(x, y, z)
  }
}

var add5 = partiallyApply(add, 5)

console.log(add5(2, 3))
console.log(add(5, 2, 3))
