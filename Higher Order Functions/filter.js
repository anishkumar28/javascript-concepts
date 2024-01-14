
const myNumbers = [5,8,3,4,1,10,6,2,7,9];

//filter method
const saveNums = myNumbers.filter( (num) => num > 4);
console.log(saveNums);

// Explicit return filter method
const newNums = myNumbers.filter( (num) => {
    return num > 5
});
console.log(newNums);



// Example:----
const books = [
    {title: "Book One", genre: "Fiction", publish: 1981},
    {title: "Book Two", genre: "Non-Fiction", publish: 1992},
    {title: "Book Three", genre: "History", publish: 1999},
    {title: "Book Four", genre: "Non-Fiction", publish: 1989},
    {title: "Book Five", genre: "Science", publish: 2009},
    {title: "Book Six", genre: "Fiction", publish: 1987},
    {title: "Book Seven", genre: "History", publish: 1986},
    {title: "Book Eight", genre: "Science", publish: 2011},
    {title: "Book Nine", genre: "Non-Fiction", publish: 1981},
    
];

let userBooks = books.filter( (bk) => bk.genre === 'History');// single filter condition
console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'// multiple filter condition
});
console.log(userBooks);