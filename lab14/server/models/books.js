let books = [
    { id: "1", title: "Book 1", isbn: "ISBN 1", publishedDate: "2022-01-01", author: "Author 1" },
    { id: "2", title: "Book 2", isbn: "ISBN 2", publishedDate: "2022-02-01", author: "Author 2" },
    { id: "3", title: "Book 3", isbn: "ISBN 3", publishedDate: "2022-03-01", author: "Author 3" }
];

module.exports = class Book{
    constructor(id, title, isbn, publishedDate, author){
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    getAll(){
        return books;
    }

    addBook(myBook){
        console.log("my id", this.id)
        const book = books.find( b => b.id == this.id);
        
        if(book){
            console.log("Found")
            throw new Error(`Book with Book ID - ${book.id} already exists!`)
        }else{
            books.push(myBook);
            return myBook;
        }
    }
}