// Qsl. Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = "jayesh" , username should be "@jayesh6"

let userName = prompt("Enter your full name: ")
let newUserName = `@${userName}${userName.length}`
alert(`Your username is ${newUserName}`)
console.log(`User created with name ${newUserName}`)