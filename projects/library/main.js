const myLibrary = [
    {
        id: 0,
        title: 'Fahrenheit 451',
        author: 'Bradbury, Ray',
        pages: 249,
        read: false
    },
    {
        id: 1,
        title: 'Dune',
        author: 'Herbert, Frank',
        pages: 720,
        read: true
    },
    {
        id: 2,
        title: '1984',
        author: 'Orwell, George',
        pages: 205,
        read: false
    }
];

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
    deleteButton.setAttribute('class', 'delete');

    deleteDiv.appendChild(deleteButton);
    deleteDiv.setAttribute('class', 'delete');

    return deleteDiv;
}

function createBookEntry(book) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const titleDiv = createDiv('book-title', book.title);
    const authorDiv = createDiv('book-author', book.author);
    const pagesDiv = createDiv('book-pages', book.pages);
    const readDiv = createDiv('read-book', book.read);
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

function deleteBookFromLibrary(target) {

}

function changeReadStatus(target) {

}

const bookList = document.querySelector('.book-list ul');
bookList.addEventListener('click', e => {
    if (e.target.className === 'delete') {
        console.log('Delete this');
        deleteBookFromLibrary(e.target);
    } else if (e.target.className === 'read-book') {
        console.log('Change read status'); //! Careful with this one
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
