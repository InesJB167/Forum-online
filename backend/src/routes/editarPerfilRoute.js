const express= require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {editarPerfil}  = require('../controllers/editarPerfilController');

router.put('/atualizar' ,authMiddleware,editarPerfil);
module.exports = router;