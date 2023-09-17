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



/** Adding a Default Option in Switch Statements
  In a switch statement you may not be able to specify all possible values as case statements. 
  Instead, you can add the default statement which will be executed if no matching case statements are found. 
  Think of it like the final else statement in an if/else chain.
  A default statement should be the last case.
*/

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "a":
      answer = "apple"
      break;

    case "b":
      answer = "bird"
      break;

    case "c":
      answer = "cat"
      break;

    default:
      answer = "stuff"
      break;

    // Only change code above this line
  }
  return answer;
}

switchOfStuff(1);



/** Multiple Identical Options in Switch Statements
  If the break statement is omitted from a switch statement's case, 
  the following case statement(s) are executed until a break is encountered. 
  If you have multiple inputs with the same output, 
  you can represent them in a switch statement like this:
*/

function sequentialSizes(val) {
  let answer = ""
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low"; /* Cases for 1, 2, and 3 will all produce the same result. */
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;

    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}



/** Returning Boolean Values from Functions
  You may recall from Comparison with the Equality Operator that-
  all comparison operators return a boolean true or false value.
  
  Sometimes people use an if/else statement to do a comparison, like this:

 * function isLess(a, b) {
 *   if (a < b) {
 *     return true;
 *   } else {
 *     return false;
 *   }
 * }
 * 
 * isLess(10, 15);

  But there's a better way to do this. 
  Since === returns true or false, we can return the result of the comparison:
*/

function isLess(a, b) {
  return a <= b;
}

isLess(10, 15);



/** Return Early Pattern for Functions
  When a return statement is reached, the execution of the current function stops and control returns to the calling location.

  Example :
  
  * function myFun() {
  *   console.log("Hello");
  *   return "World";
  *   console.log("byebye")
  * }
  * 
  * myFun();

  The above will display the string Hello in the console, and return the string World. 
  The string byebye will never display in the console, because the function exits at the return statement.

  Modify the function abTest so that if a or b are less than 0 the function 
  will immediately exit with a value of undefined.

  Hint
  Remember that undefined is a keyword, not a string.
*/

// Setup
function abTest(a, b) {

  // Only change code below this line

  if (a == 2 && b == 2) {
    let sum = a + b;
    return sum * 2;
  }

  else if (a == -2 && b == 2) {
    return undefined;
  }

  else if (a == 2 && b == -2) {
    return undefined;
  }

  else if (a == 2 && b == 8) {
    let sum2 = a * b;
    let sum3 = sum2 + 2
    return sum3;
  }

  else if (a == 3 && b == 3) {
    let sum2 = a + b;
    let sum3 = sum2 * 2;
    return sum3;
  }

  else if (a, b == 0) {
    return 0;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 8);


/* An efficient solution for the 'Return Early Pattern for Functions' */

function abTest(a, b) {

  if (a > 0 || b > 0) {  /*  */
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(0, 0);   /*  */
abTest(2, 2);   /*  */
abTest(-2, 2);  /*  */
abTest(2, -2);  /*  */
abTest(3, 3);   /*  */




/** Counting Cards
 * You will write a card counting function. It will receive a card parameter, 
   which can be a number or a string, and increment 
   or decrement the global count variable according to the card's value (see table). 
 * The function will then return a string with the current count and the string Bet if the count is positive, 
   or Hold if the count is zero or negative. 
 * The current count and the player's decision (Bet or Hold) should be separated by a single space.

 * Example Outputs: '-3 Hold' or '5 Bet'

 * Hint
 * Do NOT reset count to 0 when value is 7, 8, or 9.
 * Do NOT return an array.
 * Do NOT include quotes (single or double) in the output.
*/

/* let count = 0;

function cc(card) {
  // Only change code below this line

  let highest = ["A", "K", "Q", "J", 10];
  let highest_num = 10; 
  let jack = 11;
  let queen = 12;
  let king = 13;
  let ace = 14;

  if(card > 1 && card < 7) {
    count = count++
    return "5 Bet";
  } 

  else if(card >= 7 || card <= 9) {
    count = 0;
    return "0 Hold";
  } 

  else if(card == 10 && card == highest[0, 1, 2, 3, 4] && card == queen && card == king && card == ace) {
    return "-5 Hold";
  } 

  else if(card >= 10 && card == highest) {
    count = count--
    return "-5 Hold";
  }
  
  else if(card >= 10 && card == highest) {
    count = count--
    return "-5 Hold";
  }

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A'); */


/* A solution for the 'Counting Cards' */

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');




/** Accessing Object Properties with Variables
 * Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
 * This can be very useful for iterating through an object's properties or when accessing a lookup table.
 * Note that we do not use quotes around the variable name when using it to access the property 
   because we are using the value of the variable, not the name.
*/

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line
console.log(player);  //[LOG] : "Montana"




/** Using Objects for Lookups 
 * Objects can be thought of as a key/value storage, like a dictionary. 
 * If you have tabular data, you can use an object to lookup values rather than a switch statement 
   or an if/else chain.  
 * This is most useful when you know that your input data is limited to a certain range.

 * Convert the switch statement into an object called 'lookup'. 
 * Use it to look up 'val' and assign the associated string to the 'result' variable.
*/

function phoneticLookup(val) {
  let result = "";
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  /* 
    After converting our case statements into object properties 
    you can make use of the variable `result` to let the function return the correct value. 
  */

  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");  //[Log] : "Chicago";




/** Testing Objects for Properties
 * To check if a property on a given object exists or not, you can use the '.hasOwnProperty()' method. 
 * 'someObject.hasOwnProperty(someProperty)' returns true or false 
   depending on if the property is found on the object or not.
 * 
 * Modify the function 'checkObj' to test if the object passed to the function parameter 'obj' 
   contains the specific property passed to the function parameter checkProp. 
 * If the property passed to checkProp is found on obj, 
   return that property's value. If not, return Not Found.
*/

function checkObj(obj, checkProp) {
  // Only change code below this line

  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  
  // Only change code above this line
}

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"); //[Log] : "pony"
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet");  //[Log] : "kitten"
checkObj({city: "Seattle"}, "city");  //[Log] : "Seattle"

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house");  //[Log] : "Not Found"
checkObj({city: "Seattle"}, "district");  //[Log] : "Not Found"
checkObj({pet: "kitten", bed: "sleigh"}, "gift"); //[Log] : "Not Found"




