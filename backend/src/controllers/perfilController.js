const db = require('../config/db');

exports.perfil = (req, res) => {
    //Pegar o ID do usuário do token (req.user.id)
    const idUser = req.user.id;
    
    //Buscar os dados atualizados do usuário no banco
    const sql = 'SELECT nome, email, genero, dataRegistro, estado FROM utilizador WHERE idUser = ?'
    db.query(sql,[idUser],(err,result)=>{
        if(err){
            return res.status(500).json({message: 'Erro ao buscar dados do usuário'});
        }

        if(result.length === 0){
            return res.status(404).json({message: 'Usuário não encontrado!'});
        }
        
        //Retornar esses dados em JSON
        res.status(200).json(result[0]);
    })
    
}

