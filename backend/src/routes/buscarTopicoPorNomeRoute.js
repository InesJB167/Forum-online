// routes/topicoRoutes.js

const express = require('express');
const { buscarTopicoPeloNome } = require('../controllers/buscarTopicoPorNomeController');
const router = express.Router();

router.get('/busca', buscarTopicoPeloNome);

module.exports = router;