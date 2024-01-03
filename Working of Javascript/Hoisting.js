//The program runs synchronously in phases like memory creation phase and code execution phase.


/* Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables(only var), classes, or imports to the top of their scope, prior to execution of the code.
   Variables and Function Declarations can thus be referenced before they are declared in Javascript.
*/

//Ex - 

console.log(a); // undefined
greet() // Hello
function greet(){
    console.log("Hello")
}

var a = 9;


// Important Note - Javascript only hoists the declarations, not the initializations. The variable is 'undefined' until the line where its initialized is reached.


/*Hoisting does not works for let and const variables, Functional Expressions and Class Expressions */

//Ex - 


console.log(c);// ReferenceError
let c = 4;

console.log(raw) //ReferenceError
const raw = 2;

boo() // 
var boo = function(){
    console.log("boo")
}

bar() // 
let bar = function(){
    console.log("boo")
}

baz() // 
const baz = function(){
    console.log("baz")
}




