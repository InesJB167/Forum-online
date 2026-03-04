const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.teste = (req, res) => {
    res.json({ message: 'A sua rota esta funcionando!! RELAXA!!' });
};

exports.register = (req, res) => {
    const { nome, email, senha } = req.body;

    // 1️⃣ Validar campos
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Preencha os campos!' });
    }

    // 2️⃣ Verificar se email já existe
    const sqlVerificarEmail = 'SELECT * FROM utilizador WHERE email = ?';
    db.query(sqlVerificarEmail, [email], (err, result) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.length > 0) {
            return res.status(400).json({ message: 'Já existe uma conta com esse email!' });
        }

        // 3️⃣ Criptografar senha
        const senhaCriptografada = bcrypt.hashSync(senha, 10);

        // 4️⃣ Inserir utilizador
        const sqlInserirUser = 
            'INSERT INTO utilizador (nome, email, senhaHash) VALUES (?, ?, ?)';

        db.query(sqlInserirUser, [nome, email, senhaCriptografada], (err, resultUser) => {

            if (err) {
                return res.status(500).json({ error: err.message });
            }

            const idUser = resultUser.insertId;

            // 5️⃣ Buscar idPerfil do "utilizador"
            const sqlBuscarPerfil = 
                "SELECT idPerfil FROM perfil WHERE nome = 'utilizador'";

            db.query(sqlBuscarPerfil, (err, resultPerfil) => {

                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                if (resultPerfil.length === 0) {
                    return res.status(500).json({ message: 'Perfil padrão não encontrado!' });
                }

                const idPerfil = resultPerfil[0].idPerfil;

                // 6️⃣ Inserir na tabela perfil_user
                const sqlInserirPerfilUser = 
                    'INSERT INTO perfil_user (idUser, idPerfil) VALUES (?, ?)';

                db.query(sqlInserirPerfilUser, [idUser, idPerfil], (err) => {

                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }

                    // 7️⃣ Responder sucesso
                    return res.status(201).json({
                        message: 'Usuário cadastrado com sucesso!'
                    });
                });

            });

        });

    });
};