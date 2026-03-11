const express = require('express');
const { listarPostsPorTopico } = require('../controllers/listarPostsController');
const router = express.Router();

// rota para pegar posts de qualquer tópico
router.get('/:idTopico/posts', listarPostsPorTopico);

module.exports = router;