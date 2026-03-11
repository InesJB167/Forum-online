const express = require('express');
const router = express.Router();
const {mostrarTopicoPorId} = require('../controllers/buscarTopicoController');

router.get('/:idTopico' ,mostrarTopicoPorId);
module.exports = router;