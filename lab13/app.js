const express = require('express');
const bookRouter = require('./routes/bookRouter')

const app = express();

// middleware
app.use(express.json());
// app.get("/", (req,res, next)=>{
//     console.log("I am here");
// })

app.use('/books', bookRouter);

// 404 not found
app.use((req, res, next)=> {
    res.status(404).send("API not supported!");
})

// 500 internal server error
app.use((req, res, next)=> {
    res.status(500).send("Internal Server Error!");
})

// server listening
app.listen(3000, ()=> {
    console.log('server listening at http://localhost:3000')
})