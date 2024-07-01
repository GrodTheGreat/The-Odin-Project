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

function createButton(divClass, bText, bClass) {
    const div = document.createElement('div');
    const button = document.createElement('button');

    button.textContent = bText;
    button.setAttribute('type', 'button');
    button.setAttribute('class', bClass);

    div.appendChild(button);
    div.setAttribute('class', divClass);

    return div;
}

function createBookEntry(book) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const titleDiv = createDiv('book-title', book.title);
    const authorDiv = createDiv('book-author', book.author);
    const pagesDiv = createDiv('book-pages', book.pages);
    let readDiv;
    if (book.read) {
        readDiv = createButton('read-book', 'Read', 'read');
    } else {
        readDiv = createButton('read-book', 'Not Read', 'not-read');
    }
    const deleteDiv = createButton('delete', 'Delete', 'delete');

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

function deleteBookFromLibrary(target) {
    const book = target.parentNode.parentNode.parentNode;
    book.remove()
}

function changeReadStatus(target) {

}


const startingBooks = [
    [0, 'Fahrenheit 451', 'Bradbury, Ray', 249, false],
    [1, 'Dune', 'Herbert, Frank', 720, true],
    [2, '1984', 'Orwell, George', 205, false]
]

const myLibrary = startingBooks.map(data => new Book(...data));

const bookList = document.querySelector('.book-list ul');
bookList.addEventListener('click', e => {
    if (e.target.className === 'delete') {
        deleteBookFromLibrary(e.target);
    } else if (
        (e.target.className === 'read') ||
        (e.target.className === 'not-read')) {
        console.log('Change read status');
        changeReadStatus();
    }
})

const addBookForm = document.getElementById('book-form');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    // displayBooks();
})

displayBooks();
