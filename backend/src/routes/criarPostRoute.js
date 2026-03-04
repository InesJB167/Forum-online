const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { criarPost } = require('../controllers/criarPostController');
const router = express.Router();

router.post('/criar' ,authMiddleware,criarPost);
module.exports = router;