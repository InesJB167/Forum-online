const express = require('express');
const { listarTopico } = require('../controllers/listarTopicoController');
const router = express.Router();

router.get('/categoria/:idCategoria' ,listarTopico);
module.exports = router;