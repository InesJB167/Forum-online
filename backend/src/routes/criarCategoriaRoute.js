const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { criarCategoria } = require('../controllers/criarCategoriaController');

router.post('/criar' ,authMiddleware,criarCategoria);
module.exports = router;