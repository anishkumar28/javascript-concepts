
// String (Numeric String) to Boolean conversion
let isLoggedIn = 1;
const booleanIsLoggedIn = Boolean(isLoggedIn);// converting to boolean
console.log(booleanIsLoggedIn); // value is true



// String (Alphabet) to Boolean conversion
let whatName = "duniya";
const booleanWhatName = Boolean(whatName);// converting to boolean
console.log(booleanWhatName); // value is true 



// String (Empty String) to Boolean conversion
let isString = "";
const booleanIsString = Boolean(isString);
console.log(booleanIsString);// value is false


// Number to Boolean conversion
let isNumber = 45 ;
const booleanIsNumber = Boolean(isNumber);
console.log(booleanIsNumber);// value is false

// 1 => true; 0 => false
// "" => false
// "duniya" => true
// 45 => true