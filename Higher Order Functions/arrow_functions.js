//Creating Arrow function
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2, 4));


// Implicit return arrow function (Implicit return meaning function argument is just one line, there is no need of return keyword in this. )
const mulTwo = (num1, num2) => num1 * num2;// write directly 
const subTwo = (num1, num2) => (num1 - num2);// wrap under paranthesis
console.log(mulTwo(3, 7));
console.log(subTwo(9, 5));


//Objects in Arrow functions
const divTwo = () => ({username: "hitesh"});
console.log(divTwo());