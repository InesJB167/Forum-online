const db = require('../config/db');

exports.listarCategoria = (req,res) =>{
    //Consulta a tabela categoria no banco de dados
    const sql = 'SELECT c.idCategoria, c.nomeCategoria, c.descricao, c.dataCriacao, c.idUser ,u.nameUser FROM categoria c join utilizador u on c.idUser = u.idUser ORDER BY nomeCategoria ASC';

    //Retorna o resultado como JSON.
    db.query(sql,(err,result)=>{
        if(err){
            console.log('Erro ao listar categorias!' ,err);
            return res.status(500).json({err:err.message});
        }

        return res.status(200).json(result);
    })
}