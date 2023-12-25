// variables are nothing but the container dabba  asta jyatt apan kahi pan store karun theuu shakto :)
// like kitchen madhe vegvegle containers astat to store diff item just like that 
// ex values of a nd b jevha apan area find karycho the values assign to it can be change but the inshort varray karel something like that 

name = "Jayesh";
console.log("name"); // ataa directly name print honar pan tyachi value print nahi honar
console.log(name); // karan jar aplyala kahi print karaych ahe tar quotes chya baher livayla lagel, quotes madhe je pan aste tyala "strings" bolto apan programming lang madhe 

int = 23;
double = 23.232;
console.log(int);
console.log(double);

x = null; // null is very special and iska matlab he khali chizz :)
y = undefined; // null and undefined dogha vegle astat they are not same 
// undefined matlab pata hi nahi kya he
// or null matlab pata to he kya he par vo khali he  
console.log(x);
console.log(y);

bool = true;
console.log(bool);

// as a good programmer the name of variable should be meaningful like name, age etc.

// js dynamically type lang ahe, manjhe aplyala phaila pasun nahi sanggava lagat variable madhe kay asel
// any variable can hold any type of value no need to define the type of variable that why its called dynamic lang

// variable are case sensitive in js name and Name both are diff 
// only letters, digits, underscore(_) and $ is allowed in variable name, spaces and special symbol are not allowed in variable name 
// variable should be start with letter, _ and $ dollar only, "123name" this variable is not allowed 
// and reserved or predefine or fixed word in js are also not allowed as variable name in js, like "console" this is not allowed
// https://www.w3schools.com/js/js_reserved.asp list of reserved words in js

//types of cases in variable 
// fullName = camal case
// fullname = 
// full_name = snake case
// full-name = kabab case
// FullName = pascal case
// generally camal case it used most of the time


// generally variables direct use nahi karaycha it is a bad practice alway use keyword front of any variable 
// var, let, const are the keywords used in front of variable name 
// maximum cases madhe apan let or const ha keyword use karu 
let n = "Jayesh";
console.log(n)

// oldest choise to define any variable is var but ata te kadhich use nahi karaycha
// in 2015 we got ES6  ECMAScript 6 it is an new standard of js it means we got new roles, new features are implimented and let and const are some of them
// using var we can declare a variable multiple time that create a mess in the program that why we use let that not allowed multiple declaration in the program

// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable "cannot be re-declared" but can be updated. A block scope variable.
// const : Variable cannot be re-declared or updated. A block scope variable.

// const are prefered in upper case like const PI etc
// bydefault a variable is undefined like let a; is undefined 
// const should be initialized with some value and it cannot be undefined 