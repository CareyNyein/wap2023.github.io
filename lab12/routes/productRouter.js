const express = require('express');
const path = require('path');

const router = express.Router();

//middlewares
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'product-form.html'));
});

router.post('/add', (req, res, next) => {
    res.json(req.body);
});

module.exports = router;