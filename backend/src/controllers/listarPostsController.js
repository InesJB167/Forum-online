const db = require('../config/db');

exports.listarPostsPorTopico = (req, res) => {
    const { idTopico } = req.params;

    const sql = `
        SELECT p.idPostagem, p.texto, p.idUser, u.nameUser
        FROM postagem p
        JOIN utilizador u ON p.idUser = u.idUser
        WHERE p.idTopico = ?
        ORDER BY p.idPostagem ASC
    `;

    db.query(sql, [idTopico], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        return res.status(200).json(result);
    });
};