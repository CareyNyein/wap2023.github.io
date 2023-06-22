const Book = require('../models/books');

exports.addBook = (req, res, next) => {
    console.log("controller", req.params.id);
    console.log("Controller body", req.body)
    const book = new Book(req.params.id).addBook(req.body);
    res.status(200).json(book);
}

exports.getAll = (req, res, next) => {
    const books = new Book().getAll();
    res.status(200).json(books);
}