// ==========================================
// IMPORTAÇÃO DE MÓDULOS
// ==========================================

require('dotenv').config();//vai carregar as variaveis do arquivo .env
console.log('DB_USER:', process.env.DB_USER);

const http = require('http');
const { Server } = require('socket.io');

const express = require('express');
const cors = require('cors');

// ==========================================
// CONFIGURAÇÕES DO APP
// ==========================================

const app = express();

const server = http.createServer(app);//envelopando um app exxpress dentro do servidor http

const PORT = process.env.PORT || 3000 //permite acessar a porta estabelecida no env
app.use(cors()) // permite a conexao com o front
app.use(express.json())// permite ler dados json

//Criar o Socket.io
const io = new Server(server, {//cria a instância do Socket.io
    cors: {
        origin:"http://localhost:5173",//especifica de onde veem as conexoes
        methods: ["GET","POST"]
    }
});

//Evento de Conexão
io.on("connection", (socket)=>{
    console.log("User conectado!" ,socket.id);

    socket.on("disconnect", ()=>{
        console.log("Usuário desconectado");
    });
})

//tornar o socket acessivel 
app.set("io", io);

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
const editarPerfilRoute  = require('./routes/editarPerfilRoute');
const criarCategoria = require('./routes/criarCategoriaRoute');
const criarTopicoRoute = require('./routes/criarTopicoRoute');
const criarPost = require('./routes/criarPostRoute');
const editarPost = require('./routes/editarPostRoute');
const deletarPost = require('./routes/deletarPostRoute');
const listarCategoria = require('./routes/listarCategoriaRoute');
const listarTopico = require('./routes/listarTopicoRoute');
const listarTopicoPorUser = require('./routes/listarTopicosPorUserRoute');
const ultimoTopico = require('./routes/listarUltimoTopicoRoute');
const mensagensDoTopico = require('./routes/postsUltimoTopicoRoute');

//rota para autenticaçao
app.use('/api/auth', authRoutes);

//rota para login no sistema
app.use('/api', loginRoute);

//rota de perfil de usuario
app.use('/api/user', perfilRoute);

//rota para atualizar perfil de usuario
app.use('/api/perfil' ,editarPerfilRoute);

//rota para criar nova categoria
app.use('/api/categoria' ,criarCategoria);

//rota para criar novo topico
app.use('/api/topico' ,criarTopicoRoute);

//rota para criar post
app.use('/api/post' ,criarPost);

//rota para editar post
app.use('/api/post' ,editarPost);

//rota para deletar post
app.use('/api/post' ,deletarPost);

//rota para listar categorias
app.use('/api/categoria' ,listarCategoria);

//rota para listar topicos por catgoria
app.use('/api/topico' ,listarTopico);

//rota para listar topicos por user
app.use('/api/topico/user' ,listarTopicoPorUser);

//rota pra mostrar o ultimo topico
app.use('/api/topico/mostrar' ,ultimoTopico);

//rota listar posts do ultimo topico
app.use('/api' ,mensagensDoTopico);

// ==========================================
// INICIAR SERVIDOR
// ==========================================

server.listen(PORT, () => {
    console.log(`Servidor aberto na porta ${PORT}`);
})