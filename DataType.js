// There are two categories of data type based on Storage & Acessiblity - Primitive data type and Refrerence(Non-primitive) data tye

/* number, string, boolean, null, undefined, symbol & bigInt are Primitive data types.

 Array, Functions, Object literals & Dates are Reference data types.

*/


var age  = 12; // number
const scoreValue = 120.2 // number

const name = "Om"; // string

let isLoggedIn = false; // boolean

var decision = null; // null
console.log(typeof decision); // 

let varName = undefined; // undefined
let userEmail; // undefined

const id = Symbol('123')// symbol
const anotherId = Symbol('123')// symbol
console.log(id === anotherId);

// bigInt
let bigNumber =  24581196729482854n; 



//All non-primitive data types gives Object as its type
// array
const heros = ["shakimaan", "naagraj", "doga"]; 
console.log(heros[0]);

// Objects
let myObj = {  
    name: "Kartik",
    age: 22,
    height: 5.3,
}

// Function
var myFuction = function(){
   console.log("Namaste JavaScript");
}
console.log(myFuction);// return function, also known as Object function






