// Qs- For a given array with marks of students [85, 97, 44, 37, 76, 60]
//     Find the average marks of the entire class.
console.log("For a given array with marks of students [85, 97, 44, 37, 76, 60]\nFind the average marks of the entire class.")
let studentMarks = [85, 97, 44, 37, 76, 60]
let totalMarks = 0;
for (mark of studentMarks){
    totalMarks += mark;
}

let avgMarks = totalMarks / studentMarks.length
console.log(studentMarks)
console.log(`Total marks are ${totalMarks}`)
console.log(`And average marks are ${avgMarks}`)


// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//     All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// using for of loop we have to create an another variable to iterate over its indices
// using for of loop we iterate over its values and not index
console.log("\nFor a given array with prices of 5 items -> [250, 645, 300, 900, 50]\nAll items have an offer of 10% OFF on them. Change the array to store final price after applying offer.")
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