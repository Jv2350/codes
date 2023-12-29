// Q1. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
console.log('Q1. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.')

function findVowels(str) {
    let vowCount = 0;
    // using normal for loop 
    for (i = 0; i < str.length; i++) {
        if (str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u") {
            vowCount++;
        }
    }
    console.log(`Number of vowels in string '${str}' is ${vowCount}`);
}
findVowels("Jayesh")

// using for .. of loop 
console.log("Using for of loop:")
function findVow(str) {
    let count = 0;
    for (let i of str) {
        if (i === "a" ||
            i === "e" ||
            i === "i" ||
            i === "o" ||
            i === "u") {
            count++;
        }
    }
    console.log(`Number of vowels in string '${str}' is ${count}`);
}
findVow("Jayesh")



// Q2. Create an arrow function to perform the same task.
console.log("\nQ2. Create an arrow function to perform the same task")
// variable that store the whole function 
let arrowFindVowels = (str) => {
    let count = 0;
    // using for of loop 
    for (let char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") {
            count++
        }
    }
    console.log(`Number of vowels in string '${str}' is ${count}`);
}
// console.log(arrowFindVowels)
arrowFindVowels("oqpweriualksdfj")
// returns the count of vowels