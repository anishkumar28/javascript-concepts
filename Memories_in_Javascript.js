// There are two types of memory in Javascript - Stack & Heap 


// Stack is ued by all Primitive data types

let myName = "anish" 
let anotherName  = "rehaan"// creates a copy of myName
anotherName = "freaky"

console.log(anotherName);
console.log(myName);





//Heap is used by all Primitive data types

let userOne = {
    email: "user@gmail.com",
    upi: "demo21@icici"
}

let userTwo = userOne;// takes reference of userOne
userTwo.email = "myMail@gmail.com"// Changing email 

console.log(userOne.email);
console.log(userTwo.email);