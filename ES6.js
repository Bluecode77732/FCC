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




/** Use the Rest Parameter with Function Parameters */

const sum = (x, y, z) => {
    const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}


const resetSum = (...args) => { /* resetSum should be an arrow function which uses the rest parameter syntax (...) on the args parameter. */
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(resetSum(1, 2, 3, 4));  //10
console.log(resetSum(5));   //5
console.log(resetSum());    //0




/** Use the Spread Operator to Evaluate Arrays In-Place
 
 * ES6 introduces the spread operator, which allows us to expand arrays 
   and other expressions in places where multiple parameters or elements are expected.
 
 * The ES5 code below uses apply() to compute the maximum value in an array:
 
 * var arr = [6, 89, 3, 45];
 * var maximus = Math.max.apply(null, arr);
 * maximus would have a value of 89.
 * 
 * We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
 * Math.max() expects comma-separated arguments, but not an array. 
 * The spread operator makes this syntax much better to read and maintain.
 
 * const arr = [6, 89, 3, 45];
 * const maximus = Math.max(...arr);
 
 * maximus would have a value of 89.
 
 * ...arr returns an unpacked array. In other words, it spreads the array. 
 * However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
 
 * For example:
 
 * const spreaded = [...arr];

 * However, the following code will not work:

 * const spreaded = ...arr;

 * Copy all contents of arr1 into another array arr2 using the spread operator. 
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line
arr2 = { ...arr1 };  //Btw, was wondering and figured out that this line would be {0: 'JAN', 1: 'FEB', 2: 'MAR', 3: 'APR', 4: 'MAY'}.

console.log(arr2);




/** Use Destructuring Assignment to Extract Values from Objects */

const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today1: 77,
    tomorrow1: 80
};

// Only change code below this line

/* before es6 :
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow; */

/* after es6 :  */
const { today1, tomorrow1 } = HIGH_TEMPERATURES1;

// Only change code above this line




/** Use Destructuring Assignment to Assign Variables from Objects

 * Destructuring allows you to assign a new variable name when extracting values. 
 * You can do this by putting the new name after a colon when assigning the value.
*/

const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today2: 77,
    tomorrow2: 80
};

// Only change code below this line

/* before es6 :
const highToday = HIGH_TEMPERATURES2.today;
const highTomorrow = HIGH_TEMPERATURES2.tomorrow; */

/* after es6 : */
const {today2 : highToday1, tomorrow2 : highTomorrow} = HIGH_TEMPERATURES2;

// Only change code above this line




/** Use Destructuring Assignment to Assign Variables from Nested Objects */ 

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today : {low : lowToday, high : highToday2}} = LOCAL_FORECAST

// Only change code above this line




/** Use Destructuring Assignment to Assign Variables from Arrays */

let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];




/** Destructuring via rest elements
 * In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

 * The result is similar to Array.prototype.slice(), as shown below:
 
 ** const [a, b, ...arr] = [1, 2, 3, 4, 5, 7]; **
 * console.log(a, b); 
 * console.log(arr);

 * The console would display the values 1, 2 and [3, 4, 5, 7].
  
 * Variables a and b take the first and second values from the array. After that, because of the rest syntax presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.
 
 * Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted. 
*/

function removeFirstTwo1(list1) {
  const [a, b, ...shorterList1] = list1;
  return shorterList1;
}

const source1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo1 = removeFirstTwo1(source1);

function removeFirstTwo2(list2) {
  const [, , ...shorterList2] = list2;
  return shorterList2;
}

const source2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo2 = removeFirstTwo2(source2);




/** Use Destructuring Assignment to Pass an Object as a Function's Parameters
 * In some cases, you can destructure the object in a function argument itself.
  
 * Consider the code below:
 
 * const profileUpdate = (profileData) => {
 *   const { name, age, nationality, location } = profileData;
 * }
 
 * This effectively destructures the object sent into the function. This can also be done in-place:
  
 * const profileUpdate = ({ name, age, nationality, location }) => {
 * 
 * }
 
 * When profileData is passed to the above function, 
   the values are destructured from the function parameter for use within the function.
 * 
 * Use destructuring assignment within the argument to the function half to send only 'max' and 'min' inside the function.
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0;




/** Create Strings using Template Literals
 * A new feature of ES6 is the template literal. 
 * This is a special type of string that makes creating complex strings easier.
 
 * Template literals allow you to create multi-line strings 
   and to use string interpolation features to create strings.
*/

/* First Method */
const result1 = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList1(arr1) {
  // Only change code below this line
  const failureItems1 = [];
  for(let i = 0; i < arr1.length; i++) {
    failureItems1.push(`<li class="text-warning">${arr1[i]}</li>`)
  }
  // Only change code above this line

  return failureItems1;
}

const failuresList1 = makeList1(result1.failure);


/* Second Method */
const result2 = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList2(arr2) {
  // Only change code below this line

  const failureItems2 = arr2.map(i => `<li class="text-warning">${i}</li>`);

  // Only change code above this line

  return failureItems2;
}

const failuresList2 = makeList2(result2.failure);




/** Write Concise Object Literal Declarations Using Object Property Shorthand */ 

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};




/** Use class Syntax to Define a Constructor Function 
 * ES6 provides a new syntax to create objects, using the class keyword.

 * In ES5, an object can be created by defining a constructor function 
   and using the new keyword to instantiate the object.

 * In ES6, a class declaration has a constructor method that is invoked with the new keyword. 

 * If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.
   
 * It should be noted that the class keyword declares a new function, to which a constructor is added. 

 * This constructor is invoked when new is called to create a new object.
 
 * Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
 * 
 * The constructor method is a special method for creating and initializing an object created with a class. 
 
 * You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms 
   And Data Structures Certification.
*/

// Only change code below this line
class Vegetable {
  constructor(name) {   //I think it's same as 'const name = name'
    this.name = name;
  }
};
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'




/** Use getters and setters to Control Access to an Object  
 * you can obtain values from an object and set the value of a property within an object.
 * These are classically called getters and setters.
 * 
 * Getter functions are meant to simply return (get) the value of an object's private variable 
   to the user without the user directly accessing the private variable.
 * 
 * Setter functions are meant to modify (set) the value of an object's private variable 
   based on the value passed into the setter function. 
 * 
 * This change could involve calculations, or even overwriting the previous value completely.
 * 
 * Note: It is convention to precede the name of a private variable with an underscore (_). 
 * However, the practice itself does not make a variable private.
*/


