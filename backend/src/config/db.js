// ==========================================
// CONEXÃO COM O BANCO DE DADOS MySQL
// ==========================================

const mysql = require('mysql2');

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
    console.log('Mysql conectado com sucesso!');
})


module.exports = db;