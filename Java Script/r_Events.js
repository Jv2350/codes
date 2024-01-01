/*Events in JS
The change in the state of an object is known as an Event
Events are fired to notify code of "interesting changes" that may affect code execution.

Mouse events (click, double click etc.)
Keyboard events (keypress, keyup, keydown)
Form events (submit etc.)
Print event & many more */


let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log("Button in clicked (written in js )");
    console.log(evt)
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    
} 


// if the event is define in both inline and in js then the js event has more priority
// and if multiple event handler set for the same then it get override
let div = document.querySelector("#div")
div.onmouseover = (evt) => {
    console.log("You are inside the div");
    console.log(evt)
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

/* It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.
node.event = e => {
    //handle here
}
e.target, e.type, e.clientX, e.clientY */



/*Event Listeners
node.addEventListener( event, callback(function) )
node.removeEventListener( event, callback(function) )
*Note : the callback reference should be same to remove*/

let func = () => {
    console.log("Using the event listener")
}

btn1.addEventListener("click", func)
btn1.removeEventListener("click",func) // to remove the eventlistener both parameter have to be same as addeventlistener    