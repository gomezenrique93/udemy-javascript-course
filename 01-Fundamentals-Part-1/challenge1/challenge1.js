/* Write your code below. Good luck! 🙂 */
// Part 1
let massMark = 78;
let heightMark = 1.69
let massJohn = 92;
let heightJohn = 1.95

let BMIMark = massMark / (heightMark * heightMark);

let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
