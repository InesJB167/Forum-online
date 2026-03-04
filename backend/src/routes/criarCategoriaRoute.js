const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { criarCategoria } = require('../controllers/criarCategoriaController');
const isAdmin = require('../middlewares/isAdmin');

router.post('/criar' ,authMiddleware,isAdmin,criarCategoria);
module.exports = router;