const name = "rehaan"

const repoCount = 50

// Traditional way of String (String concatination - Using plus sign to concatinate)
console.log(name + repoCount + " Value");

// Modern way of String (String Interpolation - Backticks are used, dollar sign are used for variable)
console.log(`Hello my name is: ${name} and my repo count is ${repoCount} `);


const gameName = new String('batteground-mobile-india') // declaring a string using Objects
console.log(gameName[0]); // Accessing key-Value pair of String 


console.log(gameName.__proto__);// gives the object of the string 
console.log(gameName.length);// Accessing Methods of String 

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

let newString = gameName.substring(0,2)
console.log(newString);
newString = gameName.substring(-3,2);//In subString method negative value are not allowed if you give negative value it automatically start from 0.
console.log(newString);

let anotherName = gameName.slice(0,3)// it start and end value
console.log(anotherName); 
anotherName  = gameName.slice(-2,4);// In slice method negative value is allowed but it works reversely in negative value.
console.log(anotherName);

const newStringOne = "  namaste  "
console.log(newStringOne);
console.log(newStringOne.trim());// clear the whitespaces in the string

const url = "https://namaste%20dev.com";
console.log(url.replace('%20','-')); // replace the string

console.log(url.includes("dev"));// check for the matching string

console.log(gameName.split("-"));// split using the the seperator, you can also use limit with the seperator


// For more method of String refer to MDN docs.