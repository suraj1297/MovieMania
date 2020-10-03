import {
    getMovies
} from "./getMovies.js"


getMovies("popular", "en")

let $dropdown = document.querySelector(".dropdown")
let $language = document.querySelector(".language")

$dropdown.addEventListener("mouseover", () => {
    $language.style.display = ($dropdown.classList[1] == "fa-caret-down") ? "block" : "none"
    $dropdown.classList = ($dropdown.classList[1] == "fa-caret-down") ? "fa fa-caret-up dropdown" : "fa fa-caret-down dropdown"

})


// document.querySelector(".eng").addEventListener("click", () => 
// document.querySelector(".telugu").addEventListener("click", () => 
// document.querySelector(".tamil").addEventListener("click", () => 
// document.querySelector(".kannada").addEventListener("click", () =>
// document.querySelector(".malayam").addEventListener("click", () => 
// document.querySelector(".home").addEventListener("click", () => 
// document.querySelector(".popular").addEventListener("click", () => 
// document.querySelector(".upcoming").addEventListener("click", () => 