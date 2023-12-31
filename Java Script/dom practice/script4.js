// Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag.

// to create element we use createElement()
let btn = document.createElement("button")
console.log(btn)

// to set the text of the button element
btn.innerText="Click me"

// to change the background color 
btn.style.backgroundColor = "red"

// to change the text color 
btn.style.color = "white"

// and finally adding btn as the first element inside the body tag
document.querySelector("body").prepend(btn)


// Qs. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the element.
// Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.

let para = document.querySelector("p");
// para.setAttribute("class","newClass") // this will change styling but not append

// to append the class we use "classList.add"
// to remove we use "classList.remove"

para.classList.add("newClass")
console.log(para.classList  )