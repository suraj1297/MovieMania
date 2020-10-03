//  this function wil loop over the array[object] of movies and will will diplay each movie in ui
// The element <div class="movie-card"> is created by this function

function render(movies) {

    /* 
    movies = [{movie},{movie}]
    */

    let $section = document.querySelector("#movie-list")
    $section.innerHTML = ""

    movies.forEach(movie => {

        // creating div element to hold movie info
        let $div = document.createElement("div")
        $div.classList = `movie-card ${movie.id}`

        // movie title
        let $h2 = document.createElement("h2")
        $h2.appendChild(document.createTextNode(movie.title))
        $div.appendChild($h2)

        // movie release date
        let $date = document.createElement("p")
        $date.appendChild(document.createTextNode(`Released: ${movie.release_date}`))
        $div.appendChild($date)

        // movie image
        let $img = document.createElement("img")

        let imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        $img.setAttribute("src", imageUrl)
        $img.setAttribute("alt", `${movie.title} Image`)
        $div.appendChild($img)

        let $iconDiv = document.createElement("div")
        $iconDiv.classList = "meta"

        // movie votes
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

        // adding movie card inside section
        $section.appendChild($div)
    });
}

export {
    render
}