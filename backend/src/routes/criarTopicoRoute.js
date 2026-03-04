const express= require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { criarTopico } = require('../controllers/criarTopicoController');
const router = express.Router();


router.post('/criar' ,authMiddleware,criarTopico);
module.exports = router;