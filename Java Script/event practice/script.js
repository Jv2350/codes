let btn = document.querySelector("#btn");
let body = document.querySelector("body")
let curMod = "light mode";

btn.addEventListener("click", () => {
    if (curMod == "light"){
        curMod = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        curMod = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(curMod)
})