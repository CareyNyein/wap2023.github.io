const express = require('express');
const bookRouter = require('../controllers/bookController')

const router = express.Router();

router.post('/:id', bookRouter.addBook);
router.get('/', bookRouter.getAll);

module.exports = router;