const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.post('/', bookController.save);
router.get('/', bookController.fetchAll);
router.get('/:id', bookController.getBookById);
router.delete('/:id', bookController.delete);
router.put('/:id', bookController.update);


module.exports = router;