import {
    getMovies
} from "./getMovies.js"


// this function will create the number of pages icon as per the results
function pagination(pages, selectedPage) {
    let $pages = document.querySelector(".pagination")
    $pages.innerHTML = ""
    for (let i = 1; i <= pages; i++) {
        let $page = document.createElement("p")
        $page.classList = i == selectedPage ? `selected` : ""
        $page.appendChild(document.createTextNode(i))
        $pages.appendChild($page)
    }
    // if pages are availble then only pagination tab will be shown else not
    if (!pages) {
        document.querySelector(".scroll").style.display = "none"
    } else {
        document.querySelector(".scroll").style.display = "flex"
    }

    // once the pages numbers are created adding event listener to it so that when user clicks any page 
    // then respective results can be shown to user
    addEventlistener()
}

function addEventlistener() {

    // adding event listener to page number so that whenever the user clicks specfic page it takes him onto that page
    let $pages = document.querySelectorAll(".pagination p")
    $pages.forEach(page => page.onclick = (e) => {
        document.querySelector(".selected").classList = ""

        let $clickedPage = e.srcElement;
        $clickedPage.classList = "selected"

        // setting the scroll top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })

        // fetching movies of requested page number
        getMovies(document.querySelector(".select").innerHTML.toLowerCase(), document.querySelector(".languages").value, $clickedPage.innerHTML)

    })
}

export {
    pagination
}