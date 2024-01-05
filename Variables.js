// There are three types of variables in Javascript - var, let and const. 

/* var is globally scoped where let and cosnt is block scoped.
var variables are initialized with undefined whereas let and const variables are not initialized with undefined. */


/* var is used before ES6 to define a variable.
It is not/less recommended to use this nowdays because it causes error in the bug.
var can be updated or re-declared within its scope. */

console.log("var variable:")
var a = "Riya";
console.log(a); 

var a = 7;
console.log(a); //output - 7

{
    var a = 9;
    console.log(a); // output - 9
}

console.log(a); // output -9




// let & const are introduced in the ES6 to create a variable.


/* let can either be declared or initialized with declaration.
let can be updated but not re-declared. */

console.log("let variable:");
let ram;
let second = 4;
second = 8;
console.log(second); // output - 8 

{
    let second = 5;
    console.log(second); // output - 5
}

console.log(second); // output - 8




/* Constants are those identifiers which can be change throughout the Javascript program.
const must be initialized at the time of declarartion.
const could never be updated or re-declared. */

console.log("const variable:")
const third = 9;
console.log(third);
 