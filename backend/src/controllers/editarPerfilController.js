//editar perfil User
const db = require('../config/db')

exports.editarPerfil = (req, res) => {

    //pegar o id do token
    const id = req.user.idUser;

    //Receber os novos dados do req.body
    const { nome, genero, estado, email, nameUser, bio } = req.body;

    //Validar se veio pelo menos 1 campo
    if (!nome && !genero && !estado && !email && !nameUser && !bio) {
        return res.status(400).json({ message: "Envie pelo menos um campo para atualizar!" });
    }

    const verDados = 'SELECT * FROM utilizador WHERE idUser';
    db.query(verDados,[id], (err, result) => {
        if (err) {
            return res.status(400).json({ err: "Erro ao buscar usuário" });
        }
        if (result === 0) {
            return res.status(500).json({ message: "Usuário não encontrado!" })
        }

        //variavel com o valor do select ,caso o user nao mude nada em um dos campos
        const infoUser = result[0];
        const novoNome = nome || infoUser.nome;
        const novoGenero = genero || infoUser.genero;
        const novoEstado = estado || infoUser.estado;
        const novoEmail = email || infoUser.email;
        const novoNameUser = nameUser || infoUser.nameUser;
        const novaBio = bio || infoUser.bio;

        //mandar pra a bd
        const sql = 'UPDATE utilizador SET nome = ? ,genero = ? , estado = ? ,email = ? ,nameUser = ? ,bio = ? WHERE idUser = ? ';

        db.query(sql, [novoNome, novoGenero, novoEstado, novoEmail, novoNameUser, novaBio, id], (err) => {

            if (err) {
                return res.status(500).json({ message: "Erro ao atualizar perfil" });
            }

            res.status(200).json({ message: "Perfil atualizado com sucesso!" });
        });

    });

}