// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01

// ===== Exercise Code =====
// note the difference with below block
function createCounter() {
  var count = 0 //count is a int variable
  return {
    increment: function() {
      count += 1
    },
    currentValue: function() {
      return count
    }
  }
}

var myCounter = createCounter()

console.log(myCounter.currentValue()) // prints '0', i.e. currentValue = 0

myCounter.increment() // 0 + 1 = 1
myCounter.increment() // 1 + 1 = 2

console.log(myCounter.currentValue()) // prints '2' i.e. currentValue = 2

myCounter.count = 999 // uh oh!

console.log(myCounter.currentValue()) // does not prints '999'now. Prints the correct value '2'



// ===== Original Code =====

// note the difference with top block
const myCounter = {
  count: 0, // count is a method/property of myCounter
  increment: function() {
    this.count += 1
  },
  currentValue: function() {
    return this.count
  }
}

console.log(myCounter.currentValue()) // prints '0', i.e. currentValue = 0

myCounter.increment() // 0 + 1 = 1
myCounter.increment() // 1 + 1 = 2

console.log(myCounter.currentValue()) // prints '2' i.e. currentValue = 2

myCounter.count = 999 // uh oh!

console.log(myCounter.currentValue()) // prints '999' i.e. overwrites the 'proper' currentValue
