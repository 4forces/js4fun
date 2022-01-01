// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02

// ===== Exercise Code 2 =====

function createCounter(count) {
  // inner fxns 'increment' and 'currentValue' can access 'count' arg from outer fxn above

  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}

var counterStartingAt5 = createCounter(5)
var counterStartingAtMinus2 = createCounter(-2)

// ===== Exercise Code 1 =====
function createCounter(startAt) {
  var count = startAt //using arg startAt as a 'constructor' (and assign to a var)

  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}

// ===== Original Code =====
function createCounter() {
  var count = 0

  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}
