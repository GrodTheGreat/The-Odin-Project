function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        if (this.read) {
            return  `${this.title} by ${this.author}, ${this.pages}, read`;
        }

        return  `${this.title} by ${this.author}, ${this.pages}, not read yet`;
    }
}