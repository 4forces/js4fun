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

Refer to `\02_04\Begin\*.js`


**4. Higher-Order Functions**

A function that takes a function as an argument, returns a function, or both. In contrast to basic functions which just works with data, these functions work with other functions as well.

Works with similar classes of functions with similar needs (conditions) and usages.

One purpose is to delay the execution of the (inner) functions until all the conditions are ready.

We can see how complex functions can be constructed from simpler functions, keeping code readable and flexible

Refer to `\02_05\Begin\*.js`

## 3. Array Functions

**1. Mappping**

*Note:*  `_.map()` does not change the original array. The result has to be assigned to something.
```javascript
const numbersSquared = _.map(numbers, func)
```

Refer to `\03_02\Begin\*.js`

**2. Filtering**

When we only want array elements that fit a specific criteria, for e.g. even numbers, or employees below a certain salary.

A `true` or `false` value is returned after passing though `filter`. The `true` element is included in the new array. `False` is left out.

Refer to `\03_03\Begin\*.js`

**3. Every/Some**

Similar as `filter` for inputs, but output is just boolean T/F. `Some` returns `True` when at least 1 arr element returns `True`. `Every` returns `True` when all elements return `True`.

Refer to `\03_04\Begin\*.js`

**3. Reducing**

`Reduce` reduces the arr down to a single value based on conditions the user gives it in the function. For eg. array values may be passed through a 'sum' condition and return a single value (sum of all array values).

```javascript
/* as opposed to the other functions above, the function
arg in 'reduce' generally takes in 2 args.
A third element the starting value can also be passed in.
'acc' = accumulated elements
'element' = current element */

// pseudo code
_.reduce(array, function(acc,element) {
  ...
  return ...
}, startingVal)

// actual code
const sum = _.reduce(array, function(acc, element){
  {
    return acc + element
  }
}, 0)
```

Refer to `\03_05\Begin\*.js`

**4. Combining functions**

More can be achieved by combining functions together. Data is transformed via mulitiple functions (map, reduce, filter) to obtain desired results. The original data is not mutated. Transformed data is always assigned to a new variable.

Refer to `\03_06\Begin\*.js`

## 4. Callbacks

**1. Intro**

Asynchronous tasks are used so as to not hold up the application (which occurs in synchronous tasks). In 'Synchronous' tasks, the line before has to be executed before the next line (similar to procedural). This leads to long application hold ups occuring if one line of code is 'stuck'.

In JS, async tasks are handled via 'callbacks'.

A callback is a function which is passed as an argument to an asynchronous function.

```javascript
// e.g. of callback function in an async function
// 'result' is usually the result of the async function (someAsyncTask in this case)
  // that we pass to the callback function
someAsyncTask( function(result) {
  console.log("The result was: " + result)
})

console.log("I was called right away!")


// e.g. of a function in synchronous(non-async) function
var file = fs.readFileCync('someHugeFile.txt', 'utf8')

console.log("That took a long time!")
```

**2. Simple Callbacks**

Refer to `\04_02\Begin\*.js`

**3. Callbacks with arguments**

Usually in callbacks, the result of the asyc fxn is passed into the inner fxn as 2nd argument, and the error (err) is passed as the 1st argument.

```javascript
someAsyncFunction( function(err, result) {
  ...
})
```
To run lines after async function, it needs to be placed within the function argument of the async. Placing it outside may lead to errors as the next line still runs despite async function still incomplete.

Refer to `\04_03\Begin\*.js`


## Reference
*Learning Functional Programming with JavaScript* (ES5) by Shaun Wassell
