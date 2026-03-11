const db = require('../config/db');

exports.buscarTopicoPeloNome = (req, res) => {

    const { nome } = req.query;

    if (!nome) {
        return res.status(400).json({ message: "Informe o nome do tópico" });
    }

    // separa as palavras
    const stopWords = ["de", "do", "da", "a", "o"];
    const palavras = nome
        .trim()
        .split(" ")
        .filter(p => !stopWords.includes(p.toLowerCase()));

    // cria os LIKE dinamicamente
    const condicoes = palavras.map(() => "LOWER(t.desgnacao) LIKE LOWER(?)").join(" OR ");

    const sql = `
        SELECT t.idTopico, t.desgnacao, c.nomeCategoria
        FROM topico t
        JOIN categoria c ON t.idCategoria = c.idCategoria
        WHERE ${condicoes}
        ORDER BY t.dataCriacao DESC
    `;

    const valores = palavras.map(p => `%${p}%`);

    db.query(sql, valores, (err, result) => {

        if (err) {
            console.log("Erro ao buscar tópicos:", err);
            return res.status(500).json({ err: err.message });
        }

        return res.status(200).json(result);
    });

};