// Learning Functional Programming with Javascript
// Chapter 05, Video 02, Exercise 01

// ===== working code =====
function add(x, y, z) { // including 'z' as a 3rd arg
  return x + y + z
  }

  // to partially apply only the first arg 'x', do as follows
  function partiallyApply(func, x) {
    return function(y, z) {
      return func(x, y, z)
    }
  }

var add5 = partiallyApply(add, 5) // partially apply fxn by input z = 5 first

console.log(add5(2, 3)) // fully apply the fxb by remaining inputs x = 2, y = 3

// ===== original code =====
function add(x, y) { // full fxn takes 2 args x and y
  return x + y
}

function partiallyApply(func, x) { // partially apply by breaking down to func1.1 with 'y' variable, leaving 'x'
  return function(y) {
    return func(x, y)
  }
}

var add5 = partiallyApply(add, 5) // partially apply: 'x = 5' and assign to a new variable 'add5'

console.log(add5(2)) // apply the remaining variable: 'y = 2' to func1.1: 'add5' and return result
