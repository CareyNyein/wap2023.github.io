const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/bookRouter')

const app = express();

app.use(express.json());

app.use('/books', bookRouter);

app.use((err, req, res, next)=> {
    res.status(500).json(
        {error: err.message}
    )
})


app.listen(3000, ()=> {
    console.log('Server listening at http://localhost:3000');
})