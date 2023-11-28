function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(data => {
    renderBooks(data)})
// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then(resp => resp.json())
//     .then(json => renderBooks(json))
}
    //return data;}
  
  // To pass the tests, don't forget to return your fetch!


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    console.log(book.name)
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});


