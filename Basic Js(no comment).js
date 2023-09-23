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
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);



/* Understand 'String' Immutability */

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



/** Nest one Array within Another Array = Multi-Dimentional Array */

const myArray1 = [['str'], [1], [true]];



/** Modify Array Data With Indexes */

const myArray2 = [18, 64, 99];
myArray[0] = 45;



/** Access Multi-Dimensional Arrays With Indexes */

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[3][1];   //13
console.log(myData);



/** Understanding Undefined Value returned from a Function */

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



/** Stand in Line */

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



/** Comparisons with the Logical And Operator */

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



/** Golf Code */

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



/** Adding a Default Option in Switch Statements */

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



/** Multiple Identical Options in Switch Statements */

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



/** Returning Boolean Values from Functions */

function isLess(a, b) {
    return a <= b;
}

isLess(10, 15);



/** Return Early Pattern for Functions */

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




/** Counting Cards */

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




/** Accessing Object Properties with Variables */

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




/** Using Objects for Lookups */

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




/** Testing Objects for Properties */

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




/** Accessing Nested Objects */

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



/** Record Collection */
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



/** Iterate Through an Array with a For Loop */

// Setup
const myArr = [2, 3, 4, 5, 6]; //If I sum all of thopse values in the 'myArray', it's 20.

// Only change code below this line
let total = 0
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];  //total = total + myArray.length
}



/** Nesting For Loops */

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



/** Replace Loops using Recursion */

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



/** Profile Lookup - Working On Progress */

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
    for (let i = 0; i < name.length; i++) {
        if (name === contacts[firstName]) {
            return contacts[prop];
        } else if (name === contacts[i] && prop === contacts[i]) {
            return contacts.prop;
        } else if (name === contacts[i] && prop !== contacts[i]) {
            return "No such property";
        }
    }
    // Only change code above this line
}

lookUpProfile("Akira", "likes");




/** Generate Random Fractions with JavaScript */

function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}



/** Generate Random Whole Numbers with JavaScript */

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}



/** Generate Random Whole Numbers within a Range */

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}



/** Use the parseInt Function with a Radix */

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");




/** Use the Conditional (Ternary) Operator */

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);



/** Use Multiple Conditional (Ternary) Operators */

function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);



/** Use Recursion to Create a Countdown */

// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        let countDownArr = countdown(n - 1);
        countDownArr.unshift(n);
        return countDownArr;
    }
}
console.log(countdown(5));
// Only change code above this line



/** Use Recursion to Create a Range of Numbers */

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        let arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
};

console.log(rangeOfNumbers(1, 5));
