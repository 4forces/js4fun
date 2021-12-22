// Learning Functional Programming with Javascript
// Chapter 02, Video 02, Exercise 02
const DEBUG_MODE_ENABLED = true // env variable to indicate debug mode

var debug //initialise 'debug' variable

if (DEBUG_MODE_ENABLED) { //if DEBUG_MODE_ENABLED is true
	debug = printDebugMessage //assign printDebugMessage function 'debug'
} else {
	debug = doNothing //else assign doNothing function to 'debug'
}

// Alternatively we can code the above as folows
// However, the disadvantage is that this has tendency to be less readable
/*
function debug(message) {
  if (DEBUG_MODE_ENABLED) {
    console.log(message)
  }
}
*/

// ...

debug("Some debug message")

// ...

function printDebugMessage(message) {
   console.log("DEBUG: " + message)
 }

function doNothing() { }
