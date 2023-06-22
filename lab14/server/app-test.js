const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

// Enable parsing JSON data in the request body
app.use(cors());
app.use(express.json());

// Sample book data
let books = [
    { id: "1", title: "Book 1", isbn: "ISBN 1", publishedDate: "2022-01-01", author: "Author 1" },
    { id: "2", title: "Book 2", isbn: "ISBN 2", publishedDate: "2022-02-01", author: "Author 2" },
    { id: "3", title: "Book 3", isbn: "ISBN 3", publishedDate: "2022-03-01", author: "Author 3" }
];

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Add a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: generateUniqueId(),
        title: req.body.title,
        isbn: req.body.isbn,
        publishedDate: req.body.publishedDate,
        author: req.body.author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedBook = req.body;

    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        res.json(books[index]);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// Delete a book
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;

    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.json(deletedBook[0]);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// Function to generate a unique ID (example implementation)
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
