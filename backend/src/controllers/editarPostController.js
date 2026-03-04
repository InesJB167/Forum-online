const db = require('../config/db');

exports.editarPost = (req, res) => {
    //1️⃣ Usuário precisa estar logado → authMiddleware
    // 1️⃣ Pegar id da URL e texto do body
    const { idPostagem } = req.params;
    const { texto } = req.body;

    // 2️⃣ Pegar id do usuário logado
    const idUser = req.user.idUser;

    // 3️⃣ Validar texto
    if (!texto?.trim()) {
        return res.status(400).json({ message: 'O texto do post não pode estar vazio!' });
    }

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

        // 5️⃣ Verificar se o usuário é o dono
        const idUserPost = result[0].idUser;

        if (idUserPost !== idUser) {
            return res.status(403).json({ message: 'Você não pode editar este post!' });
        }

        // 6️⃣ Atualizar o post
        const sql = 'UPDATE postagem SET texto = ? WHERE idPostagem = ?';
        db.query(sql, [texto.trim(), idPostagem], (err) => {
            if (err) {
                console.log('Erro ao atualizar post:', err);
                return res.status(500).json({ err: err.message });
            }

            return res.status(200).json({
                message: 'Post editado com sucesso!'
            });

        })

    })

}