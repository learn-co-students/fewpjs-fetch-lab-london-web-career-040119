function fetchBooks() {  // create a function to be able to fetch books

// fetch request to the Game of Thrones API

return fetch("https://anapioficeandfire.com/api/books") // use the fetch method and pass the API url as a parameter

//  The returned response should be converted to JSON. Then, call the second function, renderBooks(),
    .then(resp => resp.json()) // to then get in form of json
    .then(json => renderBooks(json)) // to pass that json string to be rendered / displayed
}

//second function, renderBooks()
function renderBooks(json) { // passing in the API's returned JSON data as the argument.
  const main = document.querySelector('main') // grab the main tag from the index.html page
  json.forEach(book => {
    const h2 = document.createElement('h2') // create the element h2
    h2.innerHTML = `<h2>${book.name}</h2>` // assign each element its book name
    main.appendChild(h2) // and append h2
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
