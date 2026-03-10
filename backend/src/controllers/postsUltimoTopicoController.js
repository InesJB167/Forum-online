const db = require("../config/db");

exports.mensagensDoTopico = (req, res) => {

    const sql = `select p.idPostagem ,p.texto ,p.idUser, u.nameUser, p.idTopico, t.desgnacao from postagem p  left join topico t on t.idTopico= p.idTopico left join utilizador u on u.idUser= p.idUser where t.idTopico = (select max(idTopico) from topico) ORDER BY p.idPostagem ASC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json(result);

    });

}