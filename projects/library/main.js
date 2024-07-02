function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    li.setAttribute('data-id', book.id)

    return li
}

function setIds() {
    for (i in myLibrary) {
        myLibrary[i].id = i;
    }
}

function displayBooks() {
    bookList.innerHTML = '';
    for (book in myLibrary) {
        bookList.appendChild(createBookEntry(myLibrary[book]));
    }
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const hasRead = document.getElementById('has-read').checked;

    const book = new Book(
        myLibrary.length,
        title,
        author,
        pages,
        hasRead
    );

    myLibrary.push(book);
    displayBooks();
}

function getBookId(target) {
    const book = target.parentNode.parentNode.parentNode;
    const bookId = Number(book.getAttribute('data-id'));

    return bookId
}

function deleteBookFromLibrary(target) {
    const book = target.parentNode.parentNode.parentNode;
    const bookId = Number(book.getAttribute('data-id'));

    book.remove();
    myLibrary.splice(bookId, 1);
    setIds();

}

function changeReadStatus(target) {
    const bookId = getBookId(target);

    myLibrary[bookId].read = !myLibrary[bookId].read;
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
        changeReadStatus(e.target);
    }
    displayBooks();
})

const addBookForm = document.getElementById('book-form');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
})

displayBooks();
