// Q1 For a given array with marks of students [85, 97, 44, 37, 76, 60]
//     Find the average marks of the entire class.
console.log("Q1. For a given array with marks of students [85, 97, 44, 37, 76, 60]\nFind the average marks of the entire class.")

let studentMarks = [85, 97, 44, 37, 76, 60]
let totalMarks = 0;
for (mark of studentMarks){
    totalMarks += mark;
}

let avgMarks = totalMarks / studentMarks.length
console.log(studentMarks)
console.log(`Total marks are ${totalMarks}`)
console.log(`And average marks are ${avgMarks}`)


// Q2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//     All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// using for of loop we have to create an another variable to iterate over its indices
// using for of loop we iterate over its values and not index
console.log("\nQ2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]\nAll items have an offer of 10% OFF on them. Change the array to store final price after applying offer.")
console.log("Using for .. of loop")
var price = [250, 645, 300, 900, 50]
console.log(price)
let i = 0
for (let val of price){
    let offer = val/10;
    // console.log(offer)
    price[i] -= offer;
    console.log(price[i]);
    i++;
}

// using normal for loop
console.log("\nUsing normal for loop ")
var price = [250, 645, 300, 900, 50]
console.log(price)
for(let i=0; i<price.length;i++){
    let offer = price[i]/10;
    price[i] -= offer;
}
console.log(`After 10% of discount new prices are: `)
console.log(price)


/*
Q3. Create an array to store companies "Bloomberg", "Microsoft", "Uber", "Google","IBM","Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/
console.log('\nQ3. Create an array to store companies "Bloomberg", "Microsoft", "Uber", "Google","IBM","Netflix"\na. Remove the first company from the array\nb. Remove Uber & Add Ola in its place\nc. Add Amazon at the end')
let arr = ["Bloomberg", "Microsoft", "Uber", "Google","IBM","Netflix"]
console.log(arr)
// to remove first company form the array we simply use shift
arr.shift()
console.log("Removing the 1st company from the array:",arr)

// removes the uber and put ola in its place using the splice method or array 
arr.splice(1,1,"Ola")
console.log("Removing Uber & adding Ola in its place:",arr)

// adding the amazon at the end using the push 
arr.push("Amazon")
console.log("Adding Amazon at the end:",arr)

// Q4. For a given array of numbers, print the square of each value using the forEach loop.

console.log("\nQ3. For a given array of numbers, print the square of each value using the forEach loop.")
let array = [1, 2, 3, 4, 5]
array.forEach((i) => {
    console.log(i * i);
})

// OR
console.log("Calling the function inside forEach instead of declaring")
function calculateSquare(i) {
    console.log(i * i);
}
array.forEach(calculateSquare)

// Q4. We are given array of marks of students. Filter out the marks of students that scored 90+-
console.log("\nQ4. We are given array of marks of students. Filter out the marks of students that scored 90+")
let marks = [123, 23, 123, 14, 112, 32, 412, 31, 23, 2312, 312]
marks.filter((val) => {
    moreThan90 = val >= 90;
    if (moreThan90) {
        console.log(val)
    }
})

let toppersArray = marks.filter((val) => {
    return val > 90
})
console.log(toppersArray)

// Q5. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

console.log("\nQ5. Take a number n as input from user. Create an array of numbers from 1 to n.\nUse the reduce method to calculate sum of all numbers in the array.\nUse the reduce method to calculate product of all numbers in the array.")
// let number = prompt("Enter the length of array: ")
let number = 5 // temp 
let newArray = [] // declaring the array named as newArray 
for (i = 0; i < number; i++) {
    newArray.push(i + 1);  // to add the element in the array from 1 to number
}
console.log(newArray);


// reduce method to calculate the sum it work as previous+current value of the array and store the resultant in the previous until the end of the array 
let sum = newArray.reduce((pre, cur) => {
    return pre + cur;
})
console.log(sum)

let product = newArray.reduce((pre, cur) => {
    return pre * cur
})
console.log(product)