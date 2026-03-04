const db = require('../config/db');

exports.deletarPost = (req, res) => {
    //1️⃣ Usuário precisa estar logado → authMiddleware
    // 1️⃣ Pegar id da URL 
    const { idPostagem } = req.params;

    //pegar o role
    const role = req.user.role;

    // 2️⃣ Pegar id do usuário logado
    const idUser = req.user.idUser;

    //3️⃣ Verificar se o post existe
    const sqlVerficarPost = 'SELECT idUser FROM postagem WHERE idPostagem = ?';

    db.query(sqlVerficarPost, [idPostagem], (err, result) => {
        if (err) {
            console.log('Erro ao encontrar o post!', err);
            return res.status(500).json({ err: err.message });
        }
        // Se não encontrou post
        if (result.length === 0) {
            return res.status(404).json({ message: 'Post não encontrado!' });
        }

        // 5️⃣ Verificar se o usuário é o dono && verificar se o usuário é admin
        const idUserPost = result[0].idUser;

        if (idUserPost !== idUser && role !== 'ADMIN') {
            return res.status(403).json({ message: 'Você não pode deletar este post!' });
        }

        // 6️⃣ deletar o post
        const sql = 'DELETE FROM postagem WHERE idPostagem = ?';
        db.query(sql, [idPostagem], (err) => {
            if (err) {
                console.log('Erro ao deletar post:', err);
                return res.status(500).json({ err: err.message });
            }

            return res.status(200).json({
                message: 'Post deletado com sucesso!'
            });

        })

    })

}