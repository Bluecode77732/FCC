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

  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];  /* Why not Dot notation but bracket? Dot notation *looks for a specific property called “checkProp”*, where bracket notation looks *for a property called the value of the “checkProp” variable*.    */
  } else {
    return "Not Found";
  }

  // Only change code above this line
}

checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"); //[Log] : "pony"
checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet");  //[Log] : "kitten"
checkObj({ city: "Seattle" }, "city");  //[Log] : "Seattle"

checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house");  //[Log] : "Not Found"
checkObj({ city: "Seattle" }, "district");  //[Log] : "Not Found"
checkObj({ pet: "kitten", bed: "sleigh" }, "gift"); //[Log] : "Not Found"




/** Accessing Nested Objects
 * Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. 

 * Use dot notation for all properties where possible, otherwise use bracket notation.
*/

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);  //[Log] : "maps"



/** Record Collection
 * Your function must always return the entire records object.
 * If value is an empty string, delete the given prop property from the album.
 * If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
 * If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
   
 * Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object. 
*/
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
/* function updateRecords(records, id, prop, value) {
  if(value === "") {
    delete records[id][prop];
  } 
  else if(prop !== recordCollection[id][tracks] && value !== "") {
    prop = value;
  } 
  else if(prop === recordCollection[id][tracks] && value !== "") {
    if(records.hasOwnProperty(tracks) === "") {
      recordCollection[id] = ["tracks"];
      recordCollection[id].tracks = value;
    }
    return records;
  }
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA'); */


function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  }
  else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }
  else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');  //Log : 
updateRecords(recordCollection, 2548, "artist")  //Log : undefined




/* Iterate Odd Numbers With a For Loop */

const oddArray = [];

for (let i = 0; i < 10; i += 2) {
  oddArray.push(i);
}



/* Count Backwards With a For Loop */

const bwArray = [];

for (let i = 10; i > 0; i -= 2) {
  bwArray.push(i);
}



/** Iterate Through an Array with a For Loop
 * A common task in JavaScript is to iterate through the contents of an array. 
  
 * One way to do that is with a for loop. 

 * This code will output each element of the array arr to the console:
 *
 * const arr = [10, 9, 8, 7, 6];
 *
 * for (let i = 0; i < arr.length; i++) {
 *    console.log(arr[i]);
 * }
  
 * Remember that arrays have zero-based indexing, 
   which means the last index of the array is length - 1. 
 * Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. 
 * In this case the last iteration is 'i === 4' i.e. when i becomes equal to 'arr.length - 1' 
   and outputs 6 to the console. 
 * Then i increases to 5, and the loop terminates because 'i < arr.length' is 'false'.
 * 
 * Declare and initialize a variable 'total' to 0. 
 * Use a for loop to add the value of each element of the 'myArr' array to 'total'.
*/

// Setup
const myArr = [2, 3, 4, 5, 6]; //If I sum all of thopse values in the 'myArray', it's 20.

// Only change code below this line
let total = 0
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];  //total = total + myArray.length
}



/** Nesting For Loops
 * If you have a multi-dimensional array, 
   you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. 
   
 * Here is an example:

 * const arr = [
 *   [1, 2], [3, 4], [5, 6]
 * ];
 * 
 * for (let i = 0; i < arr.length; i++) {
 *   for (let j = 0; j < arr[i].length; j++) {
 *     console.log(arr[i][j]);
 *   }
 * }
 * This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.
 * 
 * Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
*/

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]; //'this was the only reason I was wrong.'
    }
  }

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



/** Replace Loops using Recursion
 * Recursion is the concept that a function can be expressed in terms of itself. 
 * To help understand this, start by thinking about the following task: 
   multiply the first n elements of an array to create the product of those elements. 

 * Using a for loop, you could do this:
  
 *   function multiply(arr, n) {
 *     let product = 1;
 *     for (let i = 0; i < n; i++) {
 *       product *= arr[i];
 *     }
 *     return product;
 *   }
  
 * However, notice that 'multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]'. 
 * That means you can rewrite multiply in terms of itself and never need to use a loop.
  
 *   function multiply(arr, n) {
 *     if (n <= 0) {
 *       return 1;
 *     } else {
 *       return multiply(arr, n - 1) * arr[n - 1];
 *     }
 *   }
  
 * The recursive version of multiply breaks down like this. 
   In the base case, where n <= 0, it returns 1. 
   For larger values of n, it calls itself, but with n - 1. 
   That function call is evaluated in the same way, calling multiply again until n <= 0. 
   At this point, all the functions can return and the original multiply returns the answer.

 * Note: Recursive functions must have a base case when they return 
   without calling the function again (in this example, when n <= 0), 
   otherwise they can never finish executing.
 
 * Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr. 
*/

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else if (arr, n) {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

sum([1], 0);  //Log : 0
sum([2, 3, 4], 1);  //Log : 2
sum([2, 3, 4, 5], 3); //Log : 9



/** Profile Lookup
 *  
 * A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

 * The function should check if name is an actual contact's firstName 
   and the given property (prop) is a property of that contact.
 * 
 * If both are true, then return the "value" of that property.
 * 
 * If 'name' does not correspond to any contacts then return the string No such contact.
 * 
 * If 'prop' does not correspond to any valid properties of a contact found 
   to match 'name' then return the string No such property.
*/

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/*function lookUpProfile(name, prop) {
  // Only change code below this line
   if(name === contacts[firstName] && prop === contacts[likes]) {
    return contacts[prop];

  } else if(name !== contacts[name]) {
    return "No such contact";

  } else if(prop !== contacts[prop]) {
    return "No such property";
  } 
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
*/

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i = 0; i < name.length; i++) {
    if(name === contacts[firstName]) {
      return contacts[prop];
    } else if(name === contacts[i] && prop === contacts[i]) {
      return contacts.prop;
    } else if(name === contacts[i] && prop !== contacts[i]) {
      return "No such property";
    }
  }
  // Only change code above this line
}

lookUpProfile("Akira", "likes");




/** Generate Random Fractions with JavaScript
 * Random numbers are useful for creating random behavior.
  
 * JavaScript has a 'Math.random()' function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). 
 * Thus 'Math.random()' can return a 0 but never return a 1. 
  
 * Note: Like Storing Values with the Assignment Operator, 
   all function calls will be resolved before the return executes, 
   so we can return the value of the Math.random() function. 
 
 * Change randomFraction to return a random number instead of returning 0.
*/

function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}



/** Generate Random Whole Numbers with JavaScript
 * You can generate random decimal numbers with Math.random(), 
   but sometimes you need to generate random whole numbers. 
 * The following process will give you a random whole number less than 20:
  
 * Use Math.random() to generate a random decimal number.
 * Multiply that random decimal number by 20.
 * Use Math.floor() to round this number down to its nearest whole number.
 * Remember that Math.random() can never quite return a 1, 
   so it's impossible to actually get 20 since you are rounding down with Math.floor(). 
 * This process will give you a random whole number in the range from 0 to 19.
  
 * Putting everything together, this is what your code looks like:

 * Math.floor(Math.random() * 20);
 * You are calling Math.random(), multiplying the result by 20, 
   then passing the value to Math.floor() to round the value down to the nearest whole number.
  
 * Use this technique to generate and return a random whole number in the range from 0 to 9.
*/

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}



/** Generate Random Whole Numbers within a Range
 * You can generate a random whole number in the range from zero to a given number. 
 * You can also pick a different lower number for this range.
  
 * You'll call your minimum number min and your maximum number max.
  
 * This formula gives a random whole number in the range from min to max. 
Take a moment to read it and try to understand what this code is doing:
  
 * 'Math.floor(Math.random() * (max - min + 1)) + min'
 * Create a function called randomRange that takes a range 'myMin' and 'myMax' 
   and returns a random whole number that's greater than or equal to 'myMin' and less than or equal to 'myMax'.
*/

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}



/** Use the parseInt Function with a Radix
 * The 'parseInt()' function parses a string and returns an integer. 
 * It takes a second argument for the 'radix', which specifies the base of the number in the string. 
 * The 'radix' can be an integer between 2 and 36.
  
 * The function call looks like:

 * parseInt(string, radix);
  
 * And here's an example:
 
 * const a = parseInt("11", 2);
 
 * The radix variable says that 11 is in the binary system, or base 2. 
 * This example converts the string 11 to an integer 3.
 
 * Use 'parseInt()' in the 'convertToInteger' function so it converts a binary number to an integer and returns it.
*/

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");




/** Use the Conditional (Ternary) Operator
* The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

* The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, 
* and c is the code to run when the condition returns false.

* The following function uses an if/else statement to check a condition:

 * function findGreater(a, b) {
 *   if(a > b) {
 *     return "a is greater";
 *   }
 *   else {
 *     return "b is greater or equal";
 *   }
 * }
 * This can be re-written using the conditional operator:
 * 
 * function findGreater(a, b) {
 *   return a > b ? "a is greater" : "b is greater or equal";
 * }
  
 * Use the conditional operator in the checkEqual function to check if two numbers are equal or not. 
 * The function should return either the string Equal or the string Not Equal.
*/

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);



/** Use Multiple Conditional (Ternary) Operators
 * In the previous challenge, you used a single conditional operator. 
 * You can also chain them together to check for multiple conditions. 
 * It is considered best practice to format multiple conditional operators 
   such that each condition is on a separate line, as shown above. 
   Using multiple conditional operators without proper indentation may make your code hard to read. 
   
 * For example:

 * function findGreaterOrEqual(a, b) {
 *   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
 * }

 * In the checkSign function, use multiple conditional operators - 
   following the recommended format used in findGreaterOrEqual - 
   to check if a number is positive, negative or zero. The function should return positive, negative or zero.
*/

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);



/** Use Recursion to Create a Countdown
 * In a previous challenge, you learned how to use recursion to replace a for loop. 
 * Now, let's look at a more complex function that 
   returns an array of consecutive integers starting with 1 through the number passed to the function.

 * As mentioned in the previous challenge, there will be a base case. 
 * The base case tells the recursive function when it no longer needs to call itself. 
 * It is a simple case where the return value is already known. 
 * There will also be a recursive call which executes the original function with different arguments. 
 * If the function is written correctly, eventually the base case will be reached.
  
 * For example, say you want to write a recursive function 
   that returns an array containing the numbers 1 through n. 
 * This function will need to accept an argument, n, representing the final number. 
 * Then it will need to call itself with progressively smaller values of n until it reaches 1. 
 
 * You could write the function as follows:
  
 * function countup(n) {
 *   if (n < 1) {
 *     return [];
 *   } else {
 *     const countArray = countup(n - 1);
 *     countArray.push(n);
 *     return countArray;
 *   }
 * }
 * console.log(countup(5));
 
 * The value [1, 2, 3, 4, 5] will be displayed in the console.
 * 
 * At first, this seems counterintuitive since the value of n decreases, 
   but the values in the final array are 'increasing'. 
 ** This happens because the 'push' happens last, after the recursive call has returned. **
   At the point where 'n' is pushed into the array, 'countup(n - 1)' has already been evaluated 
   and returned [1, 2, ..., n - 1].

 * We have defined a function called countdown with one parameter (n). 
   The function should use recursion to return an array containing the integers 'n' 
   through 1 based on the n parameter. 
 * If the function is called with a number less than 1, the function should return an empty array. 
   For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
   Your function must use recursion by calling itself and must not use loops of any kind.
*/

// Only change code below this line
function countdown(n){
  if(n < 1) {
    return [];
  } else {
    let countDownArr = countdown(n - 1);
    countDownArr.unshift(n);
    return countDownArr;
  } 
}
console.log(countdown(5));
// Only change code above this line



/** Use Recursion to Create a Range of Numbers
 * Continuing from the previous challenge, 
 * we provide you another opportunity to create a recursive function to solve a problem.
 * 
 * We have defined a function named rangeOfNumbers with two parameters. 
 * The function should return an array of integers which begins 
   with a number represented by the 'startNum' parameter 
   and ends with a number represented by the 'endNum' parameter. 
   
 * The starting number will always be less than or equal to the ending number. 
 * Your function must use recursion by calling itself and not use loops of any kind. 
 * It should also work for cases where both 'startNum' and 'endNum' are the same.
*/

function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum) {
    return [];
  } else {
    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};

console.log(rangeOfNumbers(1, 5));
