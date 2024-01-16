//Function along with its Lexical scope bundled together forms a Closure.
//Closure means a function bind together in its lexical environment. 
function x(){
    var a = 7; 
    function y(){
        console.log(a);
    }
    y();
}
x();



//Example1:----
function c(){
    var one = 9;
    function d(){
        console.log(one);
    }
    a = 100;
    return d;
}

var two = c();
console.log(two);
two();



//In closures, Functions when they are returned from another function they still maintains their lexical scope, they remember where they were actually present even if the function is no longer present(functions with their lexical scope are stored).  