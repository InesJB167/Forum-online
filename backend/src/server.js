// ==========================================
// IMPORTAÇÃO DE MÓDULOS
// ==========================================

require('dotenv').config();//vai carregar as variaveis do arquivo .env
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// ==========================================
// CONFIGURAÇÕES DO APP
// ==========================================

const app = express();
PORT = process.env.PORT || 3000 //permite acessar a porta estabelecida no env
app.use(cors()) // permite a conexao com o front
app.use(express.json())// permite ler dados json

// ==========================================
// CONEXÃO COM O BANCO DE DADOS MySQL
// ==========================================

const db = mysql.createConnection({  //cria conexão com o mysql
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});

db.connect((err) =>{
    if(err){
        console.error('Erro ao se conectar com o mysql' ,err.message);
        process.exit(1);
    }
    console.log('Mysql conctado com sucesso!');
})

// ==========================================
// ROTAS DA API (ENDPOINTS)
// ==========================================

