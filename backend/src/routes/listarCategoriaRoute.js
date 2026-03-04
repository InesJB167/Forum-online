const express = require('express');
const { listarCategoria } = require('../controllers/listarCategoriaController');
const router = express.Router();

router.get('/' ,listarCategoria);
module.exports = router;