const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { deletarPost } = require('../controllers/deletarPostController');
const router = express.Router();

router.delete('/deletar/:idPostagem' ,authMiddleware,deletarPost);
module.exports = router;