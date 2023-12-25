// Data Types in JS
// Number, String, Boolean, Undefined, Null, Biglnt, Symbol

// primitive data-type are the commonly used datatypes in js above 7 are primitive datatype
// non-primitive datatypes - Object(Array, function)

let total = 123;
console.log(typeof total);

let name = "jayesh";
console.log(typeof name);

let bool = false;
console.log(typeof bool);

let undfnd;
console.log(typeof undfnd);

let n = null; // it is an absense of an a object
console.log(typeof n);

let bi = BigInt("123");
console.log(typeof bi);

let s = Symbol("Jayesh");
console.log(typeof s);

// BigInt and Symbol are the rarely used primitive datatypes    
// collection of primitive datatype is object 
// like student object have some datatypes like name (string), age(number) etc
// it is just like a dictionary holds key and value pair 

const student = {name:"Jayesh", age:10, cgpa:0, isPass:false};
console.log(student);
console.log(typeof student)

console.log(student["name"])
console.log(student.name) // both do the same task

// only updation of keys is allowed if object is defined as cont too 