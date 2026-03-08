const express = require('express');
const { listarTopicoPorUser } = require('../controllers/listarTopicosPorUserControler');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/list' ,authMiddleware,listarTopicoPorUser);
module.exports = router;