const db = require('../config/db');//importar o BD
const bcrypt = require('bcryptjs');

//testando
exports.teste = (req, res) => {
    res.json({ message: 'A sua rota esta funcionando!! RELAXA!!' });
}

exports.register = (req, res) => {
    const { nome, email, senha } = req.body; //pegar os elementos da pagina

    //checar se estao nulos
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Preecha os campos!' });
    }

    //verificar se o email ja existe 
    const sqlVerificarEmail = 'SELECT * FROM utilizador WHERE email = ?'
    db.query(sqlVerificarEmail, [email], (err, result) => {
        //se houver um email ja cadastrado vai dar erro
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: 'Ja existe uma conta relacionada a esse email' });
        }

        const senhaCriptografada = bcrypt.hashSync(senha, 10);//criptografando a senha

        //criando a query sql
        const sql = 'INSERT INTO utilizador (nome,email,senhaHash) values (?,?,?)'

        //inserindo no BD
        db.query(sql, [nome, email, senhaCriptografada], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' })
        });


    });

};




