// Function declaration 
// this returns a value
function calcAge1(birthyear) {
    return 2037 - birthyear
}

const age1 = calcAge1(1993);
console.log(age1);

// Function expression
// this is actually a value
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1993);

console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//    const age = 2037 - birthYear;
//   const retirement = 65 - age;
//    return `${firstName} retires in ${retirement} years`;
// }

//console.log(yearsUntilRetirement(1993, "Enrique"));
//console.log(yearsUntilRetirement(1980, "Bob"));

// Calling functions within functions
// Reinforces DRY principle  
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);

    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

// This paramater for birthyear
// is not related to the other parameter
const calcAge = function(birthYear) {
    return 2037 - birthYear; 
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        // exits the function immediately
        return retirement;
        console.log("This will not be executed")
    } else {
        return -1;
        console.log("This will not be executed")
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
