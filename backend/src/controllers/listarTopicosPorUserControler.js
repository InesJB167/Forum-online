const db = require('../config/db');

exports.listarTopicoPorUser = (req,res) =>{

    // pegar id do usuário autenticado
    const idUser = req.user.idUser;

    const sql = `
        SELECT t.idTopico, u.nameUser, t.desgnacao, c.nomeCategoria
        FROM topico t
        JOIN categoria c ON c.idCategoria = t.idCategoria
        JOIN utilizador u ON u.idUser = t.idUser
        WHERE t.idUser = ?
    `;

    db.query(sql,[idUser],(err,result)=>{
        if(err){
            return res.status(500).json({erro: err.message});
        }

        return res.status(200).json(result);
    });
}