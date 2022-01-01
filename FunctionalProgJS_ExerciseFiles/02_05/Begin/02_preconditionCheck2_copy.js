// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 02


// === Exercise Code ===
// compare w original code below
// the purpose here is to 'streamline'and 'simplify' the original code - note
// that 2 args are passed here. (3 args are passed in original code)

function createSafeVersion(func) { // breaks up the args to 1 arg on top,
  return function(n, message) { // 2 args below. (compare w below code). Adds a 'return'
    if (n != null && typeof n === 'number') {
      if (message != null && typeof message === 'string') {
        return func(n, message)
      }
    }
  }
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

// following 3 lines assigns the respective createSafeVersion(func) to a variable
var printMessageNTimesSafe = createSafeVersion(printMessageNTimes)
var getNthLetterSafe = createSafeVersion(getNthLetter)
var getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength)

// we can just call the respective functions using the respective assigned var above
// for clarity, ref. to Original Code below
printMessageNTimesSafe(4, "Banana") // prints "Banana Banana Banana Banana"
getNthLetterSafe(2, "Javascript") // 'v'
getSubstringOfLengthSafe(5, "Hello and welcome") // "Hello"




// === Original Code ===
function doIfSafe(n, message, func) {
  if (n != null && typeof n === 'number') {
    if (message != null && typeof message === 'string') {
      return func(n, message)
    }
  }
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

doIfSafe(4, "Banana", printMessageNTimes) // prints "Banana Banana Banana Banana"
doIfSafe(2, "Javascript", getNthLetter) // 'v'
doIfSafe(5, "Hello and welcome", getSubstringOfLength) // "Hello"
