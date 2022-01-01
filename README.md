# js4fun

## 1. Course Intro

**Installing Lodash and Running Code**

1. Inside working folder type:
    - `npm install -g npm`: Install latest version of npm
    - `npm init -y`: Creates a json file for package management in current working folder
2. Command to install *lodash* `npm install lodash --save`
3. What is Functional programming:

    - Keeps functions and data separate (unlike OOP, where fxn and data are in the constructor)
    - Avoids state change and mutable data (for e.g reassignment of same variable)
    - Treats functions as first-class citizens
        - Assigns functions to a variable, similar to other datatypes.
        - Functions can be passed as an argument to other functions
        - Funtions can be returned by other functions
    - Typically transforms a COPY of the object, not the object itself
        - The original/base object will likely be a CONST variable, and we change a copy of the CONST and assign to new variable(s) according to our required usage
## 2. First Class Functions

**1. Assigning functions to variables**
```javascript
const square = function(x) {
	return x * x
}

//without ():  returns the FUNCTION square
var anotherSquare = square // square(4) --> 16

// with (): returns the VALUE of the function square(3)
var threeSquared = square(3) // square(4) --> error
```
```javascript
sayHello() //this function still works despite its declaration done in line after, as all functions are 'automatically moved' to the top of the code before execution

function sayHello() {
	console.log("Hello")
}


sayHello2() // returns 'undefined', as sayHello2 is a variable referring to a function.

const sayHello2 = function() {
    console.log("Hello!")
}

sayHello2() // prints "Hello!". This function-in-a-variable works normally since it is called after declaration

```
```javascript
var line = console.log //note the lack of (). console.log witout () calls the console.log function and NOT its value
line("Hello world") // prints "Hello world"
```
- Refer to `02_02\Begin\01_rename_wkg.js` and `02_02\Begin\01_debug_wkg.js`

**2. Passing functions as arguments**

- Anonymous function: a function without a name, that is usually used when function is assigned to variable. Usually used when the function is very specific to a certain instance

```javascript
// Original 'named' function code

// initialise doIf function
function doIf(condition, func) {
  if(condition) {
    func()
  }
}

// arguments for doIf
doIf(x === 1, sayXis1)
doIf(x === "Bananas", sayXisBananas)
doIf(x < 10 && x > 0, sayXisBetween0And10)

// define/initialise following functions
function sayXis1() { console.log("x is equal to 1") }
function sayXisBananas() { console.log("x is equal to 'Bananas'") }
function sayXisBetween0And10() { console.log("x is between 0 and 10") }
```

```javascript
// 'Anonymised' function code

// initialise doIf function
function doIf(condition, func) {
  if(condition) {
    func()
  }
}

// passing arguments for doIf, based on conditions
    // note different anonymous functions are passed as
        // second argument based on different conditions
doIf(x === 1, function() {
  console.log("x is equal to 1")
})
doIf(x === "Bananas", function() {
  console.log("x is equal to 'Bananas'")
})
doIf(x < 10 && x > 0, function() {
  console.log("x is between 0 and 10")
})
```
- Refer to `\02_03\*.js`

**3. Closure and returning functions**

- E.g. of returning functions using multi brackets

```javascript
giveMeAFunction()() // prints "I'm a function."
// the 2 brackets:
// bracket 1 returns 'return function()'
// bracket 2 returns 'console.log("I'm a function.")'

function giveMeAFunction() {
  return function() { // bracket 1 returns this line
    console.log("I'm a function.") // bracket 2 returns this line
  }
}
```

- E.g of returning named functions. Note that the inner function name (in this case
`printSomething()`) will not be retained upon return

```javascript
function giveMeAFunction () {
  function printSomething() {
    console.log("I'm a function")
  }
  return printSomething
}

const aFunction = giveMeAFunction()
aFunction() //prints "I'm a function"
```

- Returning Multiple Functions (resembles Object Oriented style)

  - twoFunctions.function1() //prints "I'm the first function
  - twoFunctions.function2() //prints "I'm the second function"
```javascript
function return2Functions() {
  return
  function1: function() {
    console.log("I'm the first function")
  },
  function2: function() {
    console.log("I'm the second function")
  }
}

var twoFunctions = return2Functions()

twoFunctions.function1() //prints "I'm the first function"
twoFunctions.function2() //prints "I'm the second function"

```

- Closures and Capturing

'x' "captures" the value '5' from 'var x = 5'

```javascript
function someFunction() {
  var x = 5
  return function() {
    console.log("x is " + x) // 'x' "captures" the value '5' from 'var x = 5' above
  }
}

var printValueOfX = someFunction()
printValueOfX() // prints "x is 5"
```

  - Refer to `\02_04\*.js`



### Reference
*Learning Functional Programming with JavaScript* (ES5) by Shaun Wassell
