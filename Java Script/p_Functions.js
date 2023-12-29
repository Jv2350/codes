// Functions in JS
/*
Block of code that performs a specific task, can be invoke(call) whenever needed
// Function Definition
    function {
        //do some work
    }

    function functionName( paraml, param2, ..) {
        //do some work
    }

// Function Call
    functionName( );
*/

function myFunction(){
    console.log("Welcome bruhh :)")
    console.log("learning js with me ?")
}

myFunction();

function sum(a,b){
    // a and b are acts as a local variable they don't have scope out of function
    c = a + b;
    return c;
    c = a - b;
    // after return anything we write is not considered in function
}
let x = 2; let y = 6;
let val = sum(x,y)
console.log(`\nAddition of ${x} and ${y} is ${val}`)



// Arrow function
//  compact way to writing a function (it is part of modern js)
let varNameMul = (a,b) => {
    return a*b;
}
// this creates a variable that stores the whole function in it 
console.log("\nCreated a variable and printing it:\n"+varNameMul)
let val2 = varNameMul(x,y)
console.log(`Multiplication of ${x} and ${y} is ${val2}`)

let emptyArrowFunc = () => {
    console.log("Hello, World!");
}
console.log("\n"+emptyArrowFunc)
emptyArrowFunc()



// forEach loop in array 
// arr.forEach( callBackFunction )
// CallbackFunction : Here, it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function.

/*
Syntax:
arr.forEach((val) {
    console.log(val);
})
 */

// example
console.log("\n")
let array = [1,2,3,4,5]
array.forEach((val,idx,array) => {
    console.log(val,"index: ",idx,array)
})

// forEach method/function is a "HIGHER ORDER FUNCTION" that takes another function as an parameter or returning function as a value
// in the above example we pass arrow function as the parameter of teh forEach function