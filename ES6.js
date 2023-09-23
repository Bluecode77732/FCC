/* Mutate an Array Declared with const - Step 2 */

const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2
    s[1] = 5
    s[2] = 7
    /* .sort((a, b) => b - a) */;
}
editInPlace();




/* Prevent Object Mutation - Step 3 */

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line

    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();



/** Compare Scopes of the var and let Keywords
 * If you are unfamiliar with let, check out this challenge about the difference between let and var.
When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

For example:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Here the console will display the values [0, 1, 2] and 3.

With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

Here the console will display the values [0, 1, 2] and 3.

This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

Here the console will display the value 3.

As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);

Here the console will display the value 2, and an error that i is not defined.

i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.
*/

function checkScope() {
    var i = 'function scope';
    if (true) {
        var i = 'block scope';  //This 'i' variable is same with function scope outside as it is a 'var' declared in if scope.
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}


function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';  //This 'i' variable is different function scope outside as it is a 'let' or 'const' declared in if scope.
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}




/** Use Arrow Functions to Write Concise Anonymous Functions
 
 * In JavaScript, we often don't need to name our functions, 
 * especially when passing a function as an argument to another function. 
 * Instead, we create inline functions. 
 * We don't need to name these functions because we do not reuse them anywhere else. 
 * 
 ** ES6 provides us with the syntactic sugar *to not have to write anonymous functions this way*. **
*/




/** Set Default Parameters for Your Functions
 * In order to help us create more flexible functions, ES6 introduces default parameters for functions.
 * 
 * The default parameter kicks in when the argument is not specified (it is undefined). 
 * As you can see in the example above, the parameter name will receive 
   its default value Anonymous when you do not provide a value for the parameter. 
 * You can add default values for as many parameters as you want.
*/

// Only change code below this line
const increment = (number = 5, value = 1) => number + value;
// Only change code above this line




/** 
 * 
*/




