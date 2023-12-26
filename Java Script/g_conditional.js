// to implement some condition in the code we used conditional statements

let marks = 36
console.log("Student marks is",marks)

// using simple if statement
// jar condition turu asel tar if chya khalcha execute hoil 
if (marks > 35)
    console.log("You passed the criteria :)")
// as it has only 1 line below the if statement shows no error
// if there are multiple line below the if statement then they should be in curly braces


// using if else statement
// if the condition is true then if block will execute otherwise else block will get executed
marks = 34
console.log("\nStudent marks is",marks)
if (marks > 35){
    console.log("You passed the criteria :)")
} else {
    console.log("Not eligible bruhh sorry :(")
}
// in the above code coz the marks is less than 35 therefore else block is executed


// using else-if statement in the code 
marks = 34
skills = true
console.log("\nStudent marks is",marks)
if (marks > 35){
    console.log("You passed the criteria :)")
} else if (skills == true){
    console.log("You are welcome to work coz of skills only ;D")
} else {
    console.log("Not eligible bruhh sorry :(")
}
// as the marks criteria is not satisfactory but the skills criteria is satisfying thats why the else-if part of the code get executed 


// another conditional statement is switch statement 
// yala jastaa use nahi karattt kon manun me pan nahi use karnar
// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.
marks = 35
console.log("\nStudent marks is",marks)
switch (marks){
    case 34:
        console.log("fail");
        break;
    case 35:
        console.log("just passed");
        break;
    case 50:
        console.log("passed");
        break;
    case 80:
        console.log("Shana ahes tu ghe");
        break;
    default:
        console.log("layki nay tujhi salya")       
}