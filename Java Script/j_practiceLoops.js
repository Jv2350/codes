// Q1. Print all even numbers from O to 100.

// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

gameNum = 10;
userNum = prompt("Guess the number: ")
while(gameNum != userNum){
    userNum = prompt("Your entered wrong number :( keep guessing: ");
}
console.log("Congratulations, you entered correct number :)")

