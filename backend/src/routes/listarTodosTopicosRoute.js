const express = require('express');
const router = express.Router();

router.get('/listar', require('../controllers/listarTodosTopicos').listarTodosTopicos);

module.exports = router;