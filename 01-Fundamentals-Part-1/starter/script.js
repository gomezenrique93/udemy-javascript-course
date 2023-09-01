// Lecture Values and Variables
let js = "amazing";
    if (js === "amazing") {
        alert("Javascript is fun!!");
        console.log(40+8+23-10);
    }
            
console.log(23);

let firstName = "Enrique";
let lastName = "Gomez";
console.log(firstName);
console.log(firstName);
console.log(lastName);
console.log(lastName);

let threeYears = 3;
console.log(threeYears);
let _function = 27;
let $function = 27;
console.log(_function);
console.log($function);

const PI = 3.1415;
console.log(PI);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
// End Lecture Values and Variables

// Lecture Data Types
// 1. Number: Floating point numbers -> userd for decimals or integers let age = 23;
// 2. String: Sequence of characters -> used for text let firstName = "Jonas";
// 3. Boolean: Logical type that can only be true or false -> used for taking decisions let fullAge = true;
true;
console.log(true);
let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof(true));
console.log(typeof(javascriptIsFun));
// console.log(typeof(15));
//console.log(typeof("Jonas"));

// Once your variable is declared you don't have to use "let"
javascriptIsFun = "YES";
console.log(javascriptIsFun);
// 4. Undefined: Value taken by a variable that is not yet defined ('empty value') let children;
let year;
console.log(year);
console.log(typeof(year));
year = 1991;
console.log(year);
// 5. Null: Also means 'empty value'
// 6. Symbol (ES2015): Value that is unique and cannot be changed
// 7. BigInt (ES2020): Larger integers than the Number type can hold
// Javascript has dynamic typing
/**
 * END LECTURE DATA TYPES
 * */

/**LECTURE let, const, var **/

// the variable is initialized at 31
// keyword "let", lets you reassign
let age = 30;

// the variable has been mutated to 31
// its been to have little mutation
age = 31;

// const used for constant variables
const birthYear = 1991;

// var is the old way of defining variables
// never use var
var job = 'programmer';
job = 'teacher';

console.log(job);

// even though this is valid
// dont do this!!
apellido = "Gomez";
console.log(apellido);

/**END LECTURE DATA TYPES**/

/**Lecture: Operators!!**/
const now = 2037;
const ageEnrique = now - 1991;
const ageRebecca = now - 1994;
console.log(ageEnrique, ageRebecca);

// exponentiation is the similar to the way you would do it in python
console.log(ageEnrique * 2, ageRebecca / 2, 2 ** 3);

const FIRST_NAME = 'Enrique';
const LAST_NAME = "Gomez";
const FULL_NAME = FIRST_NAME + ' ' + LAST_NAME
console.log(FULL_NAME);

// Assignment operators
let x = 10 + 5;
x += 10
x *= 4; 
x /= 2;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageRebecca > ageEnrique);
console.log(ageEnrique > ageRebecca);
console.log(ageRebecca >= 18);

const isFullAge = ageRebecca >= 18;

// Operator Precedence
// Math operators evaluated before 
// comparison operators
console.log(now - 1991 < now - 2018);

// for math operators PEMDAS is followed
console.log(5 ** 2 + (4 * 5) / 2)

// can assign multiple 
// variables on the same line
let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);

const AVERAGE_AGE = (ageEnrique + ageRebecca) / 2
console.log(AVERAGE_AGE);

// Lecture Strings and Template Literals
const enrique = "I'm" + firstName + ", a " + (year - birthYear) + " years old" + job + "!";
console.log(enrique)

// template strings
// dynamically add variables in expressions
// in a string
const enriqueNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(`Just a regular string...`);
console.log(enriqueNew);

// Lecture 
// Taking Decisions: if / else statements
const teenAge = 15;
const isOldEnough = teenAge >= 18;

if (teenAge >= 18) {
    console.log("Enrique can start driving");
} else {
    const yearsLeft = 18 - teenAge;
    console.log(`Enrique is too young, Wait another ${yearsLeft} years`)
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Lecture 
// Type Conversion and Type Coercion
const inputYear = '1991';
// converts number into a string
console.log(Number(inputYear), inputYear);
// this is still a string
console.log(Number(inputYear) + 18);

// this is not a number
console.log(Number('Enrique'));

// NaN but somehow still a number...
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
// turns the 3 into a string
console.log('23' + '10' + 3);
// carries out multiplication
console.log('23' * '2');

let n = '1' - 1;
n = n - 1;
console.log(n);

// Lecture
// Truthy and Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;");
} else {
    // evalatues to falsey so 
    // this part will be executed.
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('Yay height is defined!');
} else {
    // undefined values evaluate to falsey
    console.log('Height is undefined!');
}

// Lecture 
// Equality Operators: == vs. ===
//
const kidAGe = 18;
// strict equality
// this method is preferred
if (kidAGe === 18) 
    console.log("You just became an adult");

// loose equality
if (kidAGe == 18) 
    console.log("You just became an adult");

// this is done to convert user input to a number
const favorite = Number(prompt("What's your favorite number? "));
console.log(favorite);

if (favorite === 23) {
    console.log("Cool! 23 is an amazing number! ");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else if (favorite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 nor 7");
} 

if (favorite !== 23) {
    console.log("why not 23?");
}

// Lecture Logical Operators
//

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const isTired = true; //
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const day = "wednesday";

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // without a break the code falls through
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break; 
    case 'saturday':
    case 'sunday':
        break;
    default:
        console.log('Not a valid day!');
}

// small challenge convert switch above into if and else if statement

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
 } else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
   
// Lecture statements and expressions
// An expression is a piece of code that produces a value
console.log(3 + 4);
console.log(1991);
console.log(true && false && !false);

if (23 > 10) {
    const str = '23 is bigger';
}

// in string literals you can only use expressions
console.log(`I'm ${2037 - 1991} years old.`)

// Lecture The Conditional (Ternary) Operator
age = 44;
// condition         IF  
age >= 18 ? console.log('I like to drink wine') : 
    // ELSE
    console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'};`);

// ternary operators are good for quick decisions
// they're not meant to replace if and else if statements
//
// 'use strict'

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = false;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;
//
// JavaScript Functions
function logger() {
    console.log("My name is Jonas");
}

// calls the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

