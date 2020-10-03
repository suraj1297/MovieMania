import {
    getMovies
} from "./getMovies.js"

function pagination(pages, selectedPage) {
    let $pages = document.querySelector(".pagination")
    for (let i = 1; i <= pages; i++) {
        let $page = document.createElement("p")
        $page.classList = i == selectedPage ? `selected` : ""
        $page.appendChild(document.createTextNode(i))
        $pages.appendChild($page)
    }

    addEventlistener()
}

function addEventlistener() {

    // adding event listener to page number so that whenever the user clicks specfic page it takes him onto that page
    let $pages = document.querySelectorAll(".pagination p")
    $pages.forEach(page => page.onclick = (e) => {
        document.querySelector(".selected").classList = ""

        let $clickedPage = e.srcElement;
        $clickedPage.classList = "selected"

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })

        getMovies(document.querySelector(".select").innerHTML.toLowerCase(), document.querySelector(".languages").value, $clickedPage.innerHTML)

    })
}

export {
    pagination
}