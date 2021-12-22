// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 01


// === PRACTICE CODE ===
function doIf(condition, func) {
  if(condition) {
    func() //note the () parentheses --> returns result of the function
  }
}

const x = 1

// // --- original named function ---
// doIf(x === 1, sayXis1)
// doIf(x === "Bananas", sayXisBananas)
// doIf(x < 10 && x > 0, sayXisBetween0And10)

// function sayXis1() { console.log("x is equal to 1") }

// function sayXisBananas() { console.log("x is equal to 'Bananas'") }

// function sayXisBetween0And10() { console.log("x is between 0 and 10") }

// --- passing anonymous function as 2nd argument to doIf ---
doIf(x === 1, function() {
  console.log("x is equal to 1")
})
doIf(x === "Bananas", function() {
  console.log("x is equal to 'Bananas'")
})
doIf(x < 10 && x > 0, function() {
  console.log("x is between 0 and 10")
})



// // === ORIGINAL CODE below ===

// const x = 1

// if (x === 1) {
//   sayXis1() //calls the function sayXis1(), which performs console.log "x is equal to 1"
// }

// if (x === "Bananas") {
//   sayXisBananas() //this function is not called as conditino x === "Bananas" is not fulfilled
// }

// if (x < 10 && x > 0) {
//   sayXisBetween0And10() // this function is called
// }

// function sayXis1() { console.log("x is equal to 1") }

// function sayXisBananas() { console.log("x is equal to 'Bananas'") }

// function sayXisBetween0And10() { console.log("x is between 0 and 10") }
