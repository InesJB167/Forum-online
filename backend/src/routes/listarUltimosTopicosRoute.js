const express = require('express');
const { ultimosTopicos } = require('../controllers/listarUltimosTopicos');
const router = express.Router();

router.get('/ultimos' ,ultimosTopicos);
module.exports = router;