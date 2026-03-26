const db = require('../config/db');

exports.listarUser = (req,res) => {
    const sql = 'SELECT idUser, estado, email, dataRegistro, nameUser, bio FROM utilizador;'

    db.query(sql,(err,result)=>{
        if(err){
            console.log('Erro ao listar usuários!');
            return res.status(500).json({err:err.message});
        }
        return res.status(200).json(result);
    });

}