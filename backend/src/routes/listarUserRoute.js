const express = require('express');
const { listarUser } = require('../controllers/listarUser');
const router = express.Router();

router.get('/listar',listarUser);
module.exports = router;