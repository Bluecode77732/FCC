/** Remove Items Using splice()
Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of items in the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArray has the value ['really', 'happy'].

We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

arr.splice(1, 4);

// Only change code above this line
console.log(arr);




/** Add Items Using splice()
Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

Here, we begin with an array of numbers. Then, we pass the following to splice(): The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the remaining arguments (13, 14) will be inserted starting at that same index. Note that there can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.

We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places. 
*/

function htmlColorNames(arr) {
    // Only change code below this line
    const startIndex = 0;
    const amountToDelete = 2;
    arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));




/* Create a Module Script
JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:

<script type="module" src="filename.js"></script>
A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

Add a script to the HTML document of type module and give it the source file of index.js */

/** Html : 
    * <html>
    * <body>
    * <!-- Only change code below this line -->
    * <script type="module" src="index.js"></script>
    * <!-- Only change code above this line -->
    * </body>
    * </html>
*/




/** Use * to Import Everything from a File
 * Suppose you have a file and you wish to import all of its contents into the current file. 
 * This can be done with the import * as syntax. 
 
 * Here's an example where the contents of a file named math_functions.js are imported 
   into a file in the same directory. 
*/

import * as stringFunctions from './string_functions.js'
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");




/** Create an Export Fallback with export default
 * In the export lesson, you learned about the syntax referred to as a named export. 
 * This allowed you to make multiple functions and variables available for use in other files.
 * There is another export syntax you need to know, known as export default. 
  
 * Usually you will use this syntax if only one value is being exported from a file. 
 * It is also used to create a fallback value for a file or module.
 
 * Since export default is used to declare a fallback value for a module or file, 
   you can only have one value be a default export in each module or file. 
 * Additionally, you cannot use export default with var, let, or const.
*/

export default function subtract(x, y) {
    return x - y;
}
  



/** Create a JavaScript Promise
 * 'Promise' is a constructor function, so you need to use the new keyword to create one.
 * It takes a function, as its argument, with two parameters - 'resolve' and 'reject'.
 
    * const makeServerRequest = new Promise((resolve, reject) => {
    * 
    * });
*/



/** Complete a Promise with resolve and reject
 * A promise has three states: pending, fulfilled, and rejected. 
 * The promise you created in the last challenge is forever stuck in the pending state 
   because you did not add a way to complete the promise. 
 * The resolve and reject parameters given to the promise argument are used to do this. 
 * resolve is used when you want your promise to succeed, and reject is used when you want it to fail. 
 * These are methods that take an argument, as seen below.
*/

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer) {
        resolve("We got the data")
    } else {
        reject("Data not received")
    }
})




/** 
 * 
*/



