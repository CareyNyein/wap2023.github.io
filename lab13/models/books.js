let books = [
    {
        "id": 1,
        "title": "Applied AI",
        "isbn": "300-2222",
        "publishedDate": "12-10-2010",
        "author": "Russel"
    },
    {
        "id": 2,
        "title": "Design Patterns",
        "isbn": "350-9999",
        "publishedDate": "12-10-2000",
        "author": "Lewis"
    },
];

let idCounter = 3;

module.exports = class Book {
    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = idCounter++;
        books.push(this);
        return this;
    }

    static getAll() {
        return books;
    }

    static get(id) {
        const result = books.find(b => b.id == id);
        if (result)
            return result;
        else
            throw new Error(`Couldn't find product with given id: ${id}`);
    }

    delete() {
        const index = books.findIndex(b => b.id == this.id);
        if (index)
            books.splice(index, 1);
        else
            throw new Error(`Couldn't find product with given id: ${id}`);
    }

    update() {
        const index = books.findIndex(b => b.id == this.id);
        if (index) {
            const book = books[index];
            if (this.title)
                book.title = this.title;
            if (this.isbn)
                book.isbn = this.isbn;
            if (this.publishedDate)
                book.publishedDate = this.publishedDate;
            if (this.author)
                book.author = this.author;
        } else
            throw new Error(`Couldn't find product with given id: ${id}`);
    }
}