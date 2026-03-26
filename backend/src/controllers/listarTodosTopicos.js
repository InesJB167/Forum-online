const db = require("../config/db");

exports.listarTodosTopicos = (req, res) => {  
    const sql = "SELECT * FROM topico";

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Erro ao buscar tópicos:", err);
            return res.status(500).json({ error: "Erro ao buscar tópicos" });
        }

        return res.json(result);
    });
};