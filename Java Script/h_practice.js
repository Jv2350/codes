// Q1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

// to take input from the user using prompt for the temporarily basis 

let num = prompt("Enter a number: ")
// gets a pop-up to enter a number
if (num % 5 === 0){
    console.log(num," is multiple of 5")
    alert(num+" is multiple of 5")
} else {
    console.log(num," is not a multiple of 5")
    alert(num+" is not a multiple of 5")
}

/*
Q2. Write a code which can give grades to students according to their scores:

90-100, A
70-89, B
60-69, c
50-59, D
0-49, F 
*/

// there is only one line of code below the if and else-if statement that why we can directly write the block without the curly braces
let score = 35;
console.log("Student score is "+score)
if (score >= 90 && score <= 100)
    console.log("A");
else if (score >= 70 && score <= 89)
    console.log("B");
else if (score >= 60 && score <= 69)
    console.log("C");
else if (score >= 50 && score <= 59)
    console.log("D");
else if (score >= 0 && score <= 49)
    console.log("F");

