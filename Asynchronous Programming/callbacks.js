// Callback function is a function which is called after completing a function. The callback function is executed after the execution of callback holding function.

const cart = ["jeans","shirt","hat"];

// here creatOrder function gets a function proceedToPayment which gets some function inside it, this called a Callbaack function.
createOrder(cart, function(orderId) {
    proceedToPayment(orderId,function(paymentInfo){
        showOrderInfo(paymentInfo,function(){
                updateWallet();
            });
    });
});

// Using multiple callback caused Callback Hell, causing 'Inversion of Control' over the function & it makes a 'Pyramid of Doom'.
// Inversion of control means passing the control of our function to some another api or function.
// Passing a function to some another function for asynchronous programming would be dangerous nad not recommended, instead you can use 'Promise' or 'Async & Await'.

