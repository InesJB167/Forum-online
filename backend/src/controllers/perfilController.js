//para ver o perfil do usuario
const db = require('../config/db');

exports.perfil = (req, res) => {
    //Pegar o ID do usuário do token (req.user.id)
    console.log("req.user-" ,req.user)
    const idUser = req.user.idUser;
    console.log("ID USER", idUser)
    
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

