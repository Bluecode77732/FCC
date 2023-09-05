function Function1(thisParamIsTrue) {
    if (thisParamIsTrue) {
        return "then return 'true'."
    }
    return "No, it's not."
}



const myStr1 = "'I' am a liberal-conservatist, who believes in and belonging from the \"Classic Liberalism\".";
console.log(myStr1);



const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr2);



/* Escape Sequences in Strings */

/**
 * Code	  Output
    \'	  single quote
    \"	  double quote
    \\	  backslash
    \n	  newline
    \t	  tab
    \r	  carriage return
    \b	  backspace
    \f	  form feed
*/
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);



/** Understand 'String' Immutability

 * In JavaScript, String values are **immutable**, which means that they cannot be altered once created.
 * 
 * For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:
 * 
 * let myStr = "Bob";
 * myStr[0] = "J";
 * Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:
 * 
 * let myStr = "Bob";
 * myStr = "Job"; 
*/

/* Not like this. */

let myStr4 = "Jello World";
myStr4[0] = "H";
console.log(myStr4);

/* But like this! */

let myStr5 = "Jello World";
myStr5 = "Hello World";
console.log(myStr5);



/* Use Bracket Notation to Find the Last Character in a String */

const lastName1 = "Lovelace";
const lastLetterOfLastName = lastName1[lastName1.length - 1];



/* Use Bracket Notation to Find the Nth-to-Last Character in a String */

const lastName2 = "Lovelace";
const secondToLastLetterOfLastName = lastName2[lastName2.length - 2];



/** Nest one Array within Another Array = Multi-Dimentional Array
 * You can also nest arrays within other arrays, like below:
 * 
 * const teams = [["Bulls", 23], ["White Sox", 45]];
 * 
 * This is also called a 'multi-dimensional array'.
*/

const myArray1 = [['str'], [1], [true]];



/** Modify Array Data With Indexes 
 * Unlike 'strings', the entries of arrays are *mutable* and can be changed freely, 
   even if the array was declared with const. 
 * Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
*/

const myArray2 = [18, 64, 99];
myArray[0] = 45;



/** Access Multi-Dimensional Arrays With Indexes
 * One way to think of a multi-dimensional array, is as an array of arrays. 
  
 * When you use brackets to access your array, 
   the first set of brackets refers to the entries in the outermost (the first level) array, 
   and each additional pair of brackets refers to the next level of entries inside. 
  
 * Example : 
 * const arr = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9],
 *   [[10, 11, 12], 13, 14]
 * ];
 * const subarray = arr[3];
 * const nestedSubarray = arr[3][0];
 * const element = arr[3][0][1];
   
 * In this example, subarray has the value [[10, 11, 12], 13, 14], 
   nestedSubarray has the value [10, 11, 12], 
   and element has the value 11 .

 * Note: There shouldn't be any spaces between the array name and the square brackets, 
   like array [0][0] and even this array [0] [0] is not allowed. 

 * Although JavaScript is able to process this correctly, this may confuse other programmers reading your code. 
*/

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[3][1];   //13
console.log(myData);



/** Understanding Undefined Value returned from a Function
 * A function can include the return statement but it does not have to. 
 * In the case that the function doesn't have a return statement, 
   when you call it, the function processes the inner code but the returned value is undefined.
 * 
 * Example :

 * let sum = 0;
 *
 * function addSum(num) {
 *   sum = sum + num;
 * }
 * 
 * addSum(3);

 * addSum is a function without a return statement. 
 * The function will change the global sum variable but the returned value of the function is undefined.
*/

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;  //3
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
  console.log(sum); //8 : as 'addThree' and 'addFive' are called at the same time in the below
}
// Only change code above this line

addThree();
addFive();
