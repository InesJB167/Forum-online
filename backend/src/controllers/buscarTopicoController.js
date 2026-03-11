const db = require('../config/db');

// topicoController.js
exports.mostrarTopicoPorId = (req, res) => {
    const { idTopico } = req.params;

    const sql = `
        SELECT t.idTopico, t.desgnacao, t.descricao, c.nomeCategoria, u.nameUser
        FROM topico t
        JOIN categoria c ON t.idCategoria = c.idCategoria
        JOIN utilizador u ON t.idUser = u.idUser
        WHERE t.idTopico = ?
    `;

    db.query(sql, [idTopico], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: "Tópico não encontrado" });

        return res.status(200).json(result[0]);
    });
};