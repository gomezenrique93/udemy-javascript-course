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

// <Arrays>
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(years);
console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// Arrays are mutable but you can't reassign arrays

const jonas = ['Jonas', 'Enrique', 'Rebecca', 2023 - 1993];
console.log(jonas);

// const calcAge = [1990, 1967, 2002, 2010, 2018];

const newLength = friends.push('Enrique');
console.log(friends);
console.log(newLength);

// Adds elements to the beginning of the array
friends.unshift('Steven');
console.log(friends);

// Remove elements
//
friends.pop(); // Last
console.log(friends);
friends.pop();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));


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

// <Objects></Objects>
//

const Enrique = {
    firstName: 'Enrique',
    lastName: 'Gomez',
    age: 2031-1993,
    job: 'student',
    friends: ['Matthew', 'Jeremy', 'Britney', 'Whitney']
};

console.log(Enrique.friends);
console.log(Enrique.age); console.log(Enrique['myjob']);

const nameKey = 'Name';
console.log(Enrique['first' + nameKey])
console.log(Enrique['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas? Chose between firstName, lastName, age, job, and friends');
console.log(Enrique[interestedIn]);

if (Enrique[interestedIn]) {
    console.log(Enrique[interestedIn]);
} else {
    console.log('Wrong request!!');
}

Enrique.location = 'United States';
Enrique['email'] = 'thisismyemail@email.com';
console.log(Enrique);

// <Challenge></Challenge>
// 'Enrique has 3 friends, and his best friend is called Michael '
console.log(`${Enrique.firstName} has ${Enrique.friends.length} and his best friend is called ${Enrique.friends[0]}`)

