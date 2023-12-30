// Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.


// here coz the box is the class that why using "."
let divs = document.querySelectorAll(".box");

console.dir(divs)
console.log("Changing the div element value using js")
for(i=0;i<divs.length;i++){
    divs[i].innerText = `New unique value ${i+1}`;
}