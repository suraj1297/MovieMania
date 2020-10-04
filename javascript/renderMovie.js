//  this function wil loop over the array[object] of movies and will will diplay each movie in ui
// The element <div class="movie-card"> is created by this function

import {
    getVideo
} from "./getVideo.js";

function render(movies) {

    /* 
    movies = [{movie},{movie}]
    */

    movies.sort((a, b) => b.vote_count - a.vote_count)

    let $section = document.querySelector("#movie-list")
    $section.innerHTML = ""

    movies.forEach(movie => {

        // creating div element to hold movie info
        let $div = document.createElement("div")
        $div.classList = `movie-card ${movie.id}`

        // movie title
        let $h2 = document.createElement("h2")
        $h2.appendChild(document.createTextNode(movie.original_title))
        $div.appendChild($h2)

        // movie release date
        let $date = document.createElement("p")
        let release = document.querySelector(".category-title").innerHTML.includes("Up") ? "Releasing" : "Released"
        $date.appendChild(document.createTextNode(`${release}: ${movie.release_date}`))
        $div.appendChild($date)

        // movie image
        let $img = document.createElement("img")

        let path = movie.poster_path == null ? movie.border_path : movie.poster_path
        let imageUrl = null;
        if (path) {
            imageUrl = `https://image.tmdb.org/t/p/w500/${path}`
            $img.setAttribute("src", imageUrl)
        }

        // If image is not displayed for some reason the name of movie will be displayed
        $img.setAttribute("alt", `${movie.title} Image`)
        $div.appendChild($img)

        let $iconDiv = document.createElement("div")
        $iconDiv.classList = "meta"

        // movie vote icons
        let $voteCount = document.createElement("p")
        $voteCount.setAttribute("id", "vote-count")
        let $heart = document.createElement("i")
        $heart.classList = "fa fa-heart"
        $heart.setAttribute("area-hidden", "true")
        $voteCount.appendChild($heart)
        $voteCount.appendChild(document.createTextNode(`${movie.vote_count}`))


        // movie popularity
        let $popularity = document.createElement("p")
        $popularity.setAttribute("id", "popularity")
        let $eye = document.createElement("i")
        $eye.classList = "fa fa-eye"
        $eye.setAttribute("area-hidden", "true")
        $popularity.appendChild($eye)
        $popularity.appendChild(document.createTextNode(`${movie.popularity}`))


        $iconDiv.appendChild($voteCount)
        $iconDiv.appendChild($popularity)
        $div.appendChild($iconDiv)

        // adding event listner to every card so that when user clicks on it trailer can be shown to user
        $div.addEventListener("click", () => getVideo(movie.id, movie.original_language))
        // adding movie card inside section
        $section.appendChild($div)
    });
}

export {
    render
}