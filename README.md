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

1. Assigning functions to variables
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
### Reference
*Learning Functional Programming with JavaScript* (ES5) by Shaun Wassell
