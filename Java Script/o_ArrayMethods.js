// methods in array
/*                                                      Parameters
push() - to add item or value at the end of array       (item)
pop() - to remove item from the end of array            ()
toString() - to convert the array into a string         ()
concat() - to join two arrays                           (array to be added at the end)
unshift() - to add the item at the starting of array    (item)
shift() - to delete the item from the starting          ()
slice() - to make the parts on the array                (startIdx, endIdx)
splice() - to add, remove, replace item on the array    (startIdx, delCount, newItem)

these are used with the arrow function 
map() - Creates a new array with the results of some operation. The value its callback returns are used to form new array (callbackFnx(value, index, array))
filter() - Creates a new array of elements that give true for a condition/filter Eg: all even elements
reduce() - Performs some operations & reduces the array to a single value. It returns that single value.
*/

// using push() 
var arr = [1,2,3,4,5]
console.log("Array:",arr)
arr.push(6)
console.log("After pushing 6 in the array:",arr)


// using pop()
arr.pop();
console.log("After performing pop(): ",arr)
// these both method made change on the og array not create any separate array 


// using toString()
// as we have our array of number but we want the array in the string form then we can use toString()
console.log("Array in the string form:",arr.toString())
// this method is creating a new array and returning it, if we call the array then it returns our og array 
console.log(arr)


// using concat()
let anotherArr = ["6","7","8","9"]
console.log(`Concatenating ${arr} and ${anotherArr} results ${arr.concat(anotherArr)}   `) 
// this method also not make any change on the og array, but creates a new array 


// using unshift()
arr.unshift(0)
console.log("Using unshift() method",arr)


// using shift()
arr.shift()
console.log("Using shift() method:",arr)
// these shift and unshift methods make change on the og array and not create any other new array


// using slice()
console.log("Using slice() method",arr.slice(1,4))
// it also create a new array 


// using splice()
var arr = [1,2,3,4,5,7,8,9,0]
console.log("\nArray:",arr)
arr.splice(2,2,0,9)
console.log("Deleting 2 element from idx 2 and adding 0, 9 instead",arr)
arr.splice(1,0,4)
console.log("Adding 4 at the index 1",arr)
arr.splice(8,1)
console.log("Deleting 8 idx item: ",arr)
arr.splice(5,1,123)
console.log("Replacing 5th idx item with 123",arr)


// using map()
// Creates a new array with the results of some operation. The value its callback returns are used to form new array (callbackFnx(value, index, array))
/*
let newArr = arr.map((val) => {
    return val * 2;
}
*/
console.log("\nUsing map method")
let array = [1,2,3,4,5]
array.map((val) => {
    console.log(val)
})
// to create a new array from the existing array we can your map 
let newArray = array.map((val) => {
    return val * val 
})
console.log(newArray)


// using filter method
// Creates a new array of elements that give true for a condition/filter Eg: all even elements
newArray = array.filter((val) => {
    return val % 2 === 0;
})
console.log(newArray)


// using reduce method
console.log("\nUsing reduce method")
// Performs some operations & reduces the array to a single value. It returns that single value.
/* 
const array = [1,2,3,4]
// 0+1+2+3 +4
const initialValue = 0
array. reduce(
const sumWithInitial = array.reduce((accumulator, currentValue) => {
    accumulator + currentValue,initialValue
});
console.log(sumWithInitial)
// Expected output: 10
*/

finalValue = array.reduce((previous,current) => { 
// finalValue stores the sum of all element of the array 
    return previous+current
})
console.log(finalValue)
        
        