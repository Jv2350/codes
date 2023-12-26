// Operators in JS
// Used to perform some operation on data

// using arithmetic operators
let a = 2;
let b = 4;

//arithmetic operators are the most used operators in the programs
// using these operators we can perform the mathematical operations
// there we required 2 operands and 1 operator 
console.log("Arithmetic operators")
console.log("a =", a, "& b =", b)
console.log("a + b =", a + b, "addition")
console.log("a - b =", a - b, "subtraction")
console.log("a * b =", a * b, "multiplication")
console.log("a / b =", a / b, "division")
console.log("a % b =", a % b, "returns the remainder value")
console.log("a ** b =", a ** b, "used as 2^4")

// there exist special case also where only 1 operand is required called unary operators
console.log("\nUnary operators")
console.log("a =", a, "& b =", b)
console.log("pre increment (firstly increments the value then use on the expression)", ++a)
console.log("post increment (firstly used in the expression then incremented)", a++)
console.log("pre decrement (same as pre increment)", --a)
console.log("post decrement (same as post increment)", a--)

// to assign values to the variable of anything we use assignment operator
console.log("\nAssignment operators")
console.log("a =", a, "& b =", b)
console.log("a += b", a += b) // a = a + b
console.log("a -= b =", a -= b) // a = a - b
console.log("a *= b =", a *= b) // a = a * b
console.log("a /= b =", a /= b) // a = a / b
console.log("a %= b =", a %= b) // a = a % b
console.log("a **= b =", a **= b) // a = a ** b

// to compare the value 
console.log("\nComparison operators")
c = "4"
console.log("a =", a, ", b =", b, ", c =", c)
console.log("a == b", a == b, "called equal to too ")
console.log("here c hold the string value i.e. 4")
console.log("b == c", b == c, "checks 4 == '4'")
console.log("a === b", a === b)
console.log("b === c", b === c, "here it checks type too ")
console.log("a != b", a != b)
console.log("a !== a", a !== a)
console.log("a < b", a < b)
console.log("a > b", a > b)
console.log("a <= b", a <= b)
console.log("a >= b", a >= b)

// it gives the output as the boolean value 
console.log("\nLogical operators")
console.log("a =",a=false,"b =",b=true)
console.log("a && b",a&&b)
console.log("a || b",a||b)
console.log("!a",!a)

// same as the if else statement but with diff syntax
a = 2; 
b = 3;
console.log("\nTernary operator")
console.log("It is just like an if else statement")
// condition ? expression true : expression false
console.log("a =", a, ", b =", b)
c = a == b ? "true" : "false"
console.log("a == b ? true : false:",c)
--b
console.log("a =", a, ", b =", b)
c = a == b ? "true" : "false"
console.log("a == b ? true : false:",c)
