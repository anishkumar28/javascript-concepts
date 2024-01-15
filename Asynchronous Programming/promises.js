// Promise is an object that represents the eventual completion of an Aync operation. Promises are immutable and cannot be altered after its execution.

// Promise had three states-- Pending, Fulfilled & Rejected.

//Promises is used for asynchronous programming, promise is just a object which holds some data-value in it.
// You can attach a Normal function or a Callback function using promises.

const cart = ["jeans","shirt","hat"];
const myPromise = createOrder(cart);// myPromise is an promise object

myPromise.then(function(orderId) {
    proceedToPayment(orderId)
}
);



//Example1:---
const GITHUB_API = "https://github.com/anishkumar28"; 
const user = fetch(GITHUB_API);

user.then(function(data){
    console.log(data);
});



// Promise chaining help us out of Callback hell.
// Using multiple promises with 'then keyword' causes Promise Chaining, you must return all the functions in promises or use arrow functions for more readability. 
createOrder(cart)
        .then(function(orderId) {
            return proceedToPayment(orderId)
         })
         .then(paymentInfo => showOrderInfo(paymentInfo))
           .then(paymentInfo => updateWallet(paymentInfo));








// Creating a Promise
const promise = sortOrder(cart);
console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
})
.catch(function (err){// handling error in promises
    console.log(err.message);
});


function sortOrder(){

    const pr = new Promise(function(resolve,reject){// implemented promise function
        // validate cart
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic of createOrder
        const orderId = "52416";
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            },5000);
        }
    });

    return pr;
}

function validateCart(){
    return true;
}




// Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise