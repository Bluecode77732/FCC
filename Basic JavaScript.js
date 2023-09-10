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
 **The function will change the global 'sum' variable but the returned value of the function is undefined.**
*/

let sum = 0;

function addThree() {
  sum = sum + 3;  //3 ; the 'sum' is global variable, not the addThree's local one.
}

function addFive() {
  sum = sum + 5;
  console.log(sum); //8 : as 'addThree' and 'addFive' are called at the same time in the below
}

addThree();
addFive();



/** Stand in Line
 * In Computer Science a queue is an abstract Data Structure where items are kept in order. 
 * 
 * New items can be added at the back of the queue and old items are taken off from the front of the queue.
 * 
 * Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
 * 
 * Add the number to the end of the array, then remove the first element of the array.
 * 
 * The nextInLine function should then return the element that was removed. 
*/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  let remove = arr.shift();     //#1 this code will remove and show what was removed from the 'arr'.
  return remove;    //#2. and it will return '5' was removed from the 'arr' as 'shift' were used.

  // Only change code above this line
}

// Setup
let testArr = [5, 6, 7, 8, 9];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));



/** Comparisons with the Logical And Operator
 * Sometimes you will need to test more than one thing at a time. 
 * The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
 * 
 * The same effect could be achieved by nesting an if statement inside another if. 
*/

/* mehod 1 */

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 50) {
    if (val <= 25) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

/* method 2 */

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);



/**Golf Code
  In the game of Golf, each hole has a par, meaning, 
  the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. 
  Depending on how far above or below par your strokes are, there is a different nickname.

  Your function will be passed par and strokes arguments. 
  Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

  Strokes	Return
  1	"Hole-in-one!"
  <= par - 2	"Eagle"
  par - 1	"Birdie"
  par	"Par"
  par + 1	"Bogey"
  par + 2	"Double Bogey"
  >= par + 3	"Go Home!"
  
  par and strokes will always be numeric and positive. 
  We have added an array of all the names for your convenience. 
*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return [0];
  }

  else if (strokes <= par - 2) {
    return names[1]
  }

  else if (strokes <= par - 1) {
    return names[2]
  }

  else if (par == strokes) {
    return names[3]
  }

  else if (strokes <= par + 1) {
    return names[4]
  }

  else if (strokes <= par + 2) {
    return names[5]
  }

  else {
    return names[6]
  }

  // Only change code above this line
}

golfScore(5, 4);



