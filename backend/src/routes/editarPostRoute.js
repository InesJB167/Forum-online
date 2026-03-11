const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { editarPost } = require('../controllers/editarPostController');
const router = express.Router();

router.put('/editar/:idPostagem' ,authMiddleware,editarPost);
module.exports = router;