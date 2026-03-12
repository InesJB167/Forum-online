const db = require('../config/db');

exports.ultimosTopicos = (req,res) => {

    const sql = 'SELECT t.idTopico, u.nameUser, t.desgnacao, c.nomeCategoria FROM topico t JOIN categoria c ON c.idCategoria = t.idCategoria JOIN utilizador u ON u.idUser = t.idUser ORDER BY desgnacao DESC LIMIT 5'

    db.query(sql,(err,result)=>{
        if(err){
            console.log('Erro ao buscar ultimo topico!');
            return res.status(500).json({err:err.message});
        }

        return res.status(200).json(result);
    })
}