const Books = require('../models/books');

exports.save = (req, res, next) => {
    const book = new Books(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author).save();
    res.status(201).json(book);
};

exports.fetchAll = (req, res, next) => {
    res.json(Books.getAll());
};

exports.delete = (req, res, next) => {
    new Books(req.params.id).delete();
    res.status(204).end();
}

exports.getBookById = (req, res, next) => {
    res.json(Books.get(req.params.id));
}

exports.update = (req, res, next) => {
    new Books(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author).update();
    res.status(204).end();
}