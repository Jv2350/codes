/*
Arrays in js is a collections of items that stores in linear way 
We can say it is an special type of object not using "key:value" pair but using "index:values" pair
Creating Array
let array = [idx(1), idx(2), .. , idx(n)];
let marks = [ 96, 75, 48, 83, 66 ];
*/
let info = ["Jayesh", 123, "mumbai"];
console.log(`Array is ${info}`)
console.log(info)
console.log(`Lenght of above array is ${info.length}`) // here "length" is the property of array and not method, it just stores some value and not perform any task like others 

console.log(`2nd index of array is holding value as ${info[2]}`)
console.log(`Changing it with ${info[2]="panvel"}`) // we can change any position in array coz there are mutable 
console.log(info)

// for loop
console.log("\nUsing for loop")
for(i=0;i<info.length;i++){
    console.log(info[i]);
}

// for of loop
console.log("\nUsing for of loop")
for(let element of info){
    console.log(element)
}

// for in loop
console.log("\nUsing for in loop")
for(let element in info){
    console.log(element)
}
