const express = require('express');
const { ultimoTopico } = require('../controllers/listarUltimoTopicoController');
const router = express.Router();

router.get('/ultimo' ,ultimoTopico);
module.exports = router;