
// Bind is similar to call & apply, but you cannot directly make function calls in bind instead it recommends to creates a copy of function, which you can store.
// The idea behind Bind() is that we can create copy of our function and we can invoke it later.
let touristInfo = {
    name: "Ayush",
    age: 25,
    state: "Maharastra",
}

let printTouristInfo = function(state,country){
    console.log(this.name + state + country);
}

let touristData =  printTouristInfo.bind(touristInfo, "Noida", "India");// creating a copy of printTouristInfo function
touristData();// function invoked