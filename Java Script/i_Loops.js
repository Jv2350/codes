// to run code again and again we use the loops 
// there are diff types of loops : for, while, do .. while, for .. of, for .. in


// for loop
/*
for loop - syntax:
for (initialization; stopping condition; updation){
    statement 
}
*/

// example code of for loop:
console.log("Using for loop");
for (let i = 1; i <= 5; i++) {
    console.log(i + ". Hello world!");
    // it executes block 5 times coz the condition of loop is "i <= 5" (jar condition false jhali tt loop terminate hoil)
}
console.log("Loop has been ended");

// ex to calculate sum of 1 to n using for loop 
let sum = 0
let n = 5 // we can take input from the user too here!! 
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("\nSum of 1 to " + n + " is " + sum);


// while loop
/*
while loop - syntax:
while (condition){
    statement
}
*/

// ex code for while loop
console.log("\nUsing while loop")
let i = 1;
while (i <= 5) {
    console.log(i + ". Hello World!");
    i++;
}


// do .. while loop
/*
do .. while loop - syntax:
do{
    statement
}while (condition);
*/
i = 1
console.log("\nUsing do .. while loop")
do {
    console.log(i + ". Hello World!");
    i++;
} while (i <= 5);


// for .. of loop
// it is use to iterate over the strings and arrays
/*
for .. of loop - syntax:
for (variable of object){
    statement
}
*/

// example of for .. of loop
console.log("\nUsing for .. of loop to iterate over the string (Jayesh) ")
let str = "Jayesh";
for(let i of str){
    console.log(i);
}
// here we not need to initialization and updation as such 


// for .. of loop
// it is use to iterate over the objects(accesses the keys of object) and arrays
/*
for .. in loop - syntax:
for (variable in object){
    statement
}
*/

// exmpale of for .. in loop
console.log("\nUsing for .. in loop to iterate over the object (me)")
let me = {
    Name:"Jayesh",
    Age:123,
    isProfessional:false
}

for(let i in me){
    console.log(i,":",me[i]);
}
// it always returns the key of object