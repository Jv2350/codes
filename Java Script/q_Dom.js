// three musketeers of web dev 
// HTML(structure), CSS(style), JS(logic)

// Window Object
// The window object represents an open window in a browser. It is browser's object (not JavaScript's)& is automatically created by browser.
// It is a global object with lots of properties & methods.

// What is DOM
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page
// it is a tree like structure of the page 
// html code la pan access karu shakto javascript madhe using the dom 
// dom is mostly used when we have to make change dynamically (on run time) on our html code 

// imp script tag always above the end of body tag (procedure(set of rules))

// (console.dir) is used to display(print) the list of properties of the specified js object 
// (window.document) we can write the (document) directly as the parameter coz the window is the global object of the browser 
console.dir(window.document) // list the properties of document object 
console.dir(window.document.body)
console.dir(document.body) // both do the same tasks 

// directly changing the html in js only 
document.body.style.background = "green";


// DOM Manipulation
// Selecting with id - document.getElementById("myId")
// Selecting with class - document.getElementsByClass("myClass")
// Selecting with tag - document.getElementsByTagName("p")
// Query Selector - document.querySelector("myId I myCIass I tag") //returns first element
// document.querySelectorAll("myId I myCIass I tag") //returns a NodeList

// Properties
// tagName : returns tag for element nodes
// innerText : returns the text content of the element and all its children
// innerHTML : returns the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements