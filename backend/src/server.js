// ==========================================
// IMPORTAÇÃO DE MÓDULOS
// ==========================================

require('dotenv').config();//vai carregar as variaveis do arquivo .env
const express = require('express');
const cors = require('cors');

// ==========================================
// CONFIGURAÇÕES DO APP
// ==========================================

const app = express();
const PORT = process.env.PORT || 3000 //permite acessar a porta estabelecida no env
app.use(cors()) // permite a conexao com o front
app.use(express.json())// permite ler dados json

// ==========================================
// CONEXÃO COM O BANCO DE DADOS MySQL
// ==========================================

const db = require('./config/db');

// ==========================================
// ROTAS DA API (ENDPOINTS)
// ==========================================
const authRoutes = require('./routes/authRoutes');
const loginRoute = require('./routes/loginRoute');
const perfilRoute = require('./routes/perfilRoute');

//rota para autenticaçao
app.use('/api/auth', authRoutes);

//rota para login no sistema
app.use('/api', loginRoute);

//rota de perfil de usuario
app.use('/api/user', perfilRoute);
// ==========================================
// INICIAR SERVIDOR
// ==========================================

app.listen(PORT, () => {
    console.log(`Servidor aberto na porta ${PORT}`);
})