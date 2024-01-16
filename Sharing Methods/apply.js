
//apply() is same as call(), only difference is you can pass array list of arguments in apply().
//The apply() method is very handy if you want to use an array instead of an argument list.
let Details = {
    name: "Rohan",
    age: 15,
    designation: "Software Engineer",
}

let printDetail = function(userCity, userCountry){
    console.log(this.age+userCity+ userCountry);
}
//The apply() method takes arguments as an array.
printDetail.apply(Details,["Delhi","India"]);// you can pass argument as a array list in apply().