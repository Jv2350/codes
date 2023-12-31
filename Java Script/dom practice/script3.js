// dom attributes 

// printing all the properties of div 
let div = document.querySelector("div");
console.log(div);

// printing what attribute does id is holding (id="box") thats whys prints box
let id = div.getAttribute("id")
console.log(id)

// printing what attribute name is holding or storing 
let name = div.getAttribute("name")
console.log(name)


// to change the attribute name we use setAttribute
name = div.setAttribute("name","newAttribute") // firstly it was name="jsDiv" now name="newAttribute"
console.log(name)


let style = document.querySelector("div")
// to get all the style related properties of div tag
console.log(div.style)
// from js directly changing the css 
div.style.width="200px";


// creating the element
let btn1 = document.createElement("button")
let btn2 = document.createElement("button")
let btn3 = document.createElement("button")
let btn4 = document.createElement("button")
btn1.innerText = "1st button "
btn2.innerText = "2nd button"
btn3.innerText = "3rd button"
btn4.innerText = "4th button"

div.append(btn1) // add the new element at the end(inside) of div tag
console.log(div)

div.prepend(btn2) // add the new button at the start(inside) of div tag
console.log(div)

div.before(btn3) // add the button before(outside) the div tag
console.log(div)


let p = document.querySelector("p")
p.after(btn4) // add the button after(outside) the p tag
console.log(div)

let heading = document.createElement("h1")
body = document.querySelector("body")
heading.innerHTML = "<b>This is heading</b>"
body.prepend(heading) // we have to created the variable to do customization using the js
document.querySelector("body").prepend(heading) // or we can do like this too both are doing the same task

let para = document.querySelector("p")
para.remove() // it removes the p tag from the html
