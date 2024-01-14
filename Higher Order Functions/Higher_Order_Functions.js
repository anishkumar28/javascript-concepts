/*  Higher Order Functions are a part of Functional Programming.
Functional Programming follows the DRY principle meaning "Do Not Repeat". */


// Normal fuctions
const radius = [3, 1, 4, 2 ]

const calculateArea = function(radius){
const output = []
for(let iterator=0; iterator < radius.length; iterator++){
    output.push(Math.PI * radius[iterator] * radius[iterator]);
}
return output;
}
console.log(calculateArea(radius));


const calculateCircumference = function(radius){
    const output = []
    for(let iterator=0; iterator < radius.length; iterator++){
        output.push(2 * Math.PI * radius[iterator]);
    }
    return output;
    }
    console.log(calculateCircumference(radius));

    
const calculateDiameter = function(radius){
    const output = []
    for(let iterator=0; iterator < radius.length; iterator++){
        output.push(2 * radius[iterator]);
    }
    return output;
    }
console.log(calculateDiameter(radius));





// A function which takes another fuction as an argument or return a function from it, is called Higher Order Function.
//Higher order functions

//Example 1: ---
function x(){
    console.log("Namaste");
}

function y(x){
    x();
}



// Example 2:---
const radiusValues = [3, 1, 4, 2 ]

// area, circumference and diameter are the callback functions
const area = function(radiusValues){
    return Math.PI * radiusValues * radiusValues;
}

const circumference = function(radiusValues){
    return 2 * Math.PI * radiusValues;
}

const diameter = function(radiusValues){
    return 2 * radiusValues;
}

const calculate = function (radiusValues, logic){ // This a Higher oder function, here we pass the logic as a function 
    const outputArray = []
    for(let i=0; i<radiusValues.length; i++){
        outputArray.push(logic(radiusValues[i]));
    }
    return outputArray;
}

console.log(calculate(radiusValues, area));
console.log(calculate(radiusValues, circumference));
console.log(calculate(radiusValues, diameter));