const path = require('path');
const express = require('express');

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

const app = express();

//configurations
app.set('env', 'production');

app.use(express.urlencoded({extended: true}));

//middlewares
app.use(express.static(path.join(__dirname, 'resources')));
app.use(express.static(path.join(__dirname, 'resources')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.use('/product', productRouter);
app.use('/user', userRouter);

app.use((req, res, next) => { 
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use((err, req, res, next) => {
    console.log(err.message);
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('500 something wrong!');
});

// server listening
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})