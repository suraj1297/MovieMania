import {
    getMovies
} from "./getMovies.js"


getMovies("top_rated", "en")

// this will fetch top-rated/popular/upcoming movies of selected languages as per user
document.querySelector(".languages").addEventListener("change", () => getMovies(document.querySelector(".select").innerHTML.toLowerCase(), document.querySelector(".languages").value))

//when home is clicked it will fetch top_rated movies and will show on ui
document.querySelector(".home").addEventListener("click", () => {
    document.querySelector(".popular").classList = "popular"
    document.querySelector(".upcoming").classList = "upcoming"
    document.querySelector(".home").classList = "home select"
    document.querySelector(".category-title").innerHTML = "Top Rated Movies"

    getMovies("top_rated", document.querySelector(".languages").value)
})

//when popular is clicked it will fetch top_rated movies and will show on ui
document.querySelector(".popular").addEventListener("click", () => {
    document.querySelector(".popular").classList = "popular select"
    document.querySelector(".upcoming").classList = "upcoming"
    document.querySelector(".home").classList = "home"
    document.querySelector(".category-title").innerHTML = "Popular Movies"
    getMovies("popular", document.querySelector(".languages").value)
})

//when upcoming is clicked it will fetch top_rated movies and will show on ui
document.querySelector(".upcoming").addEventListener("click", () => {
    document.querySelector(".popular").classList = "popular"
    document.querySelector(".upcoming").classList = "upcoming select"
    document.querySelector(".home").classList = "home"
    document.querySelector(".category-title").innerHTML = "Upcoming Movies"
    getMovies("upcoming", document.querySelector(".languages").value)
})



// scroller
document.querySelector(".fa-chevron-right").onclick = () => document.querySelector(".pagination").scrollLeft += 50;

document.querySelector(".fa-chevron-left").onclick = () => document.querySelector(".pagination").scrollLeft -= 50;