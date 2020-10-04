// hen user clicks on movie card he will bedirected to youtube where he can watch trailer of the movie
// if the trailer is not availble the alert meesage will appear displaying no trailer found

function getVideo(id, language) {
    // id = movie id of whosetrailer is to fetched
    // language = movie language

    let apiKey = "92a26a0f3494c37de0d782903df76c79"
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=${language}`

    axios.get(url)
        .then(response => {
            if (response.data.results.length) {
                url = `https://www.youtube.com/embed/${response.data.results[0].key}`
                localStorage.setItem("url", url)
                window.open("/video.html")
            } else
                alert("Soory! No Trailer Available")
        })
        .catch(reject => alert("Sorry! No Trailer Available"))
}

export {
    getVideo
}