// This file will handle everthing related  to fetching movie data using api as per user request
import {
    render
} from "./render.js"

var apiKey = "92a26a0f3494c37de0d782903df76c79"

function getMovies(category, language) {
    let url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&with_original_language=${language}&page=1`

    axios.get(url)
        .then(response => {
            if (response.status == 200)
                render(response.data.results)
        })
        .catch(reject => console.log(reject))
}

export {
    getMovies
}