// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 01

// === Exercise code ===
  // If we compare to the 'Original code', since we create a 'doIfSafe'
  // we remove the 'ifs' conditional checks from the 3 functions below (compare to Original Code)
function doIfSafe(n, message, func) {
  if (n != null && typeof n === 'number') {
    if (message != null && typeof message === 'string') {
      return func(n, message) // there is 'return' as some functions returns something
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


// the 3 functions printMessageNTimes, getNthLetter and getSubstringOfLength
// are passed as one of the arguments in under function 'doIfSafe'
doIfSafe(4, "Banana", printMessageNTimes)
doIfSafe(2, "Javascript", getNthLetter)
doIfSafe(5, "Hello and welcome", getSubstringOfLength)



// === Original code ===
function printMessageNTimes(n, message) {
  if (n != null && typeof n === 'number') {
    if (message != null && typeof message === 'string') {
      for (var i = 0; i < n; i++) { console.log(message) }
    }
  }
}

function getNthLetter(n, string) {
  if (n != null && typeof n === 'number') {
    if (string != null && typeof string === 'string') {
      return string.charAt(n)
    }
  }
}

function getSubstringOfLength(n, string) {
  if (n != null && typeof n === 'number') {
    if (string != null && typeof string === 'string') {
      return string.substring(0, n)
    }
  }
}

printMessageNTimes(4, "Banana") // prints "Banana Banana Banana Banana"
getNthLetter(2, "Javascript") // 'v'
getSubstringOfLength(5, "Hello and welcome") // "Hello"
