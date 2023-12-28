// String is a sequence of characters used to represent text

/**
**creating a string
let str = "Jayesh";
 
**some in-built properties
[string length]
str.length
 
[string indices]
str[0], str[2], str[3]
*/

let str = "Jayesh";
console.log("String: " + str);
console.log("Length of '" + str + "' string is " + str.length);
console.log("At indices 0 of '" + str + "' is " + str[0]);
console.log("At indices 5 of '" + str + "' is " + str[5]);

/**  
Template literals
A way to have embedded expressions in strings

**String Interpolation
To create strings by doing substitution of placeholders
string text ${expression} string texts

template literals is a special type of string
this can create using the backticks(``)
this is used when we have to use multiple variables in the string 
*/
let specialString = `\nThis is a template literal`;
console.log(specialString);
console.log(`Type of above is ${typeof specialString}`);

// example
let name = "Jayesh";
let rollNo = 123;

console.log("Your name is", name, "and roll no. is", rollNo);
// in the above string we have to print the value of name and rollNo, for that we have to create diff string and join them using the commas(,) very annoying  
// template literal is the solution for this we directly use variables in the string using (${variableName}) 
console.log(`Your name is ${name} and roll no. is ${rollNo}`);


/*
String Methods in JS
These are built-in functions to manipulate a string
str.toUpperCase( )
str.toLowerCase( )
str.trim()  // use to remove the starting and ending spaces 
str.slice(start, end?) // returns part of string
str1.concat( str2 ) // joins str2 with str1
str.replace(searchVal, newVal)
str.charAt(idx)
*/


// these methods cannot change the og value of the string but creates a new string coz strings are immutable 
console.log("\nUsing some string methods")
let string = `              Hello my name is ${name}             `
console.log(`${name} in upper case ${name.toUpperCase()}`)
console.log(`${name} in lower case ${name.toLowerCase()}`)
console.log(`After removing leading and trailing spaces of \n'${string}' \n${string.trim()}`) // using trim we remove the leading and trailing spaces from the string 
console.log(`From 1st to 3rd char of string ${name} is ${name.slice(0,3)}`) 
console.log(`Concatenating ${name} and ${rollNo} results ${name.concat(rollNo)}`)
let string2 = `Hello my name is ${name}`
console.log(`Replacing Hello with Hii in the '${string2}' results '${string2.replace(`Hello`,`Hii`)}'`)
console.log(`In the string ${name} at 2nd index '${name.charAt(1)}' is located`)