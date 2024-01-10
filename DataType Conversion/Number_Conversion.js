// Number
let score1 = 33
console.log(typeof score1);

// String
let score2 = "33"
console.log(typeof score2);




// Number Conversion :----


// String(Number String) to Number conversion
let valueInNuber = Number(score2);
console.log(typeof(valueInNuber));



// String (alphaNumeric) to Number conversion
let counter = "33abc";
let valueInCounter = Number(counter);
console.log(typeof(valueInCounter)); // converting to number
console.log(valueInCounter); // value is in data type NaN (Not a Number)



// String (Aphabets) to Number conversion
let wish = "naamaste";
let valueInWish = Number(counter);
console.log(typeof(valueInWish)); // converting to number
console.log(valueInWish); // value is in data type NaN (Not a Number)



// String (Empty String) to Number conversion
let brackets = "";
let valueInBrackets = Number(brackets);
console.log(typeof(valueInBrackets)); // converting to number
console.log(valueInBrackets); // value is in data type NaN (Not a Number)



// Boolean to Number conversion
let isColdAtNight = true; // boolean value as true 
let valueInNight = Number(isColdAtNight);
console.log(valueInNight); // value is 1

let isColdAtDay = false; // boolean value as false
let valueInDay = Number(isColdAtDay);
console.log(valueInDay); // value is 0

 // "33" => 33
 // "33abc" => NaN
 // "" => NaN
 // "namaste" => NaN
// true => 1
 // false => 0

