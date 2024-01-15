
//Async function will always return a promise
async function getData(){
    return "Namaste";// if not don't return a promise from async function, returning object will automatically wrapup under the promise and then return it as a promise.
}

const dataPromise = getData();
console.log(dataPromise);

dataPromise.then((res) => console.log(res));




// asyn & await combo is used to handle promises.
const p = new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve("Promise is Resolve ");
        },10000);
    });

async function handlePromise(){
    const val = await p;// Await is a keyword that is only be used inside the Async function
    // JS engine will be waiting for promise to be resolved
    console.log("Namaste Javascript");
    console.log(val);
}
handlePromise();




//Example1:---- Normally(old way) handling promises
const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve("Promise is Resolve ");
    },10000);
});
function getData(){
    // Js engine will not wait for the promise to be resolved
    promise.then((res) => console.log(res));
    console.log("Namaste Duniya");
}
getData();