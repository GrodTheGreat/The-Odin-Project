const myLibrary = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.published = published;
}

function createDiv(divClass, pText) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = pText;

    div.appendChild(p);
    div.setAttribute('class', divClass);

    return div;
}

function createBookDelete() {
    const deleteDiv = document.createElement('div');
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('type', 'button');

    deleteDiv.appendChild(deleteButton);
    deleteDiv.setAttribute('class', 'delete');

    return deleteDiv;
}

function createBookEntry(book) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const titleDiv = createDiv('book-title', book.title);
    const authorDiv = createDiv('book-author', book.author);
    const pagesDiv = createDiv('book-author', book.pages);
    const readDiv = createDiv('book-author', book.read);
    const deleteDiv = createBookDelete();

    div.appendChild(titleDiv);
    div.appendChild(authorDiv);
    div.appendChild(pagesDiv);
    div.appendChild(readDiv);    
    div.appendChild(deleteDiv);

    div.setAttribute('class', 'book');
    li.appendChild(div);

    return li
}

function displayBooks() {
    for (book in myLibrary) {
        bookList.appendChild(createBookEntry(myLibrary[book]));
    }
}

function addBookToLibrary() {
    console.log('New Book!');
    
}

const bookList = document.querySelector('.book-list ul');
const addBookForm = document.getElementById('book-form');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    // displayBooks();
})

let book1 = new Book(0, "Fahrenheit 451", "Bradbury, Ray", 249, false);
let book2 = new Book(1, "Dune", "Herbert, Frank", 720, true);
let book3 = new Book(2, "1984", "Orwell, George", 205, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

displayBooks();
