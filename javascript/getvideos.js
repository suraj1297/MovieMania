document.querySelector(".").addEventListener("click", () => {
    document.querySelector(".popular").classList = "popular"
    document.querySelector(".upcoming").classList = "upcoming select"
    document.querySelector(".home").classList = "home"
    document.querySelector(".category-title").innerHTML = "Upcoming Movies"
    getMovies("upcoming", document.querySelector(".languages").value)
})

var apiKey = "92a26a0f3494c37de0d782903df76c79"

    let url = `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${apiKey}`

    axios.get(url)
        .then(response => {
            if (response.status == 200)
                console.log(response.data);
        })
        .catch(reject => console.log(reject))
