
const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers')

//criando a rota 
router.get('/teste' ,authControllers.teste);
router.post('/register' , authControllers.register);

module.exports = router;