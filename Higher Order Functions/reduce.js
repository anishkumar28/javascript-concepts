/* Reduce method requires a initial value in the function, which is stored in accumulator
and when result is return it is stored in accumulator.
Accumulator is another variable which stores the result.
It mostly used to billing the prices of shopping cart
*/


const myNums = [1,2,3];

//reduce method
const myTotal = myNums.reduce(function (acc,currVal) {
    console.log(`Acc is ${acc} and currVal is ${currVal}`);
    return  acc+currVal;
},0);


// Example:----
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 2499
    },

    {
        itemName: "mobile development course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 11999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0);
console.log(priceToPay);
































//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce