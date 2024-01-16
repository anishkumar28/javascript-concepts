
//The call method is a predefined js method, with the call() method, you can write a method that can be used on different objects.
//With call(), an object can use a method belonging to another object.
let userDetails1 = {
    name: "Ajay",
    age: 28,
    designation: "Software Engineer",
    printDetails: function(){
        console.log(this);
    }
}
// userDetails1.printDetails();

let userDetails2 = {
    name: "Anish",
    age: 21,
    designation: "FrontENd Engineer"  
}
//function borrowing
// userDetails1.printDetails.call(userDetails2);



// Example:---
let personDetails = {
    name: "Ajay",
    age: 28,
    designation: "Software Engineer",
}

let printPersonDetail = function(){
    console.log(this );
}
printPersonDetail.call(personDetails);



// Exapmple2-----
let userInfo = {
    name: "Amit",
    age: 28,
    designation: "Software Engineer",
}

let printPersonInfo = function(state,country){
    console.log(this.name + state + country);
}
printPersonInfo.call(userInfo, "Noida", "India");//The call() method takes arguments separately.




