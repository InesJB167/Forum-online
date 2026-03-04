const db = require('../config/db');

exports.listarCategoria = (req,res) =>{
    //Consulta a tabela categoria no banco de dados
    const sql = 'SELECT idCategoria, nomeCategoria FROM categoria ORDER BY nomeCategoria ASC';

    //Retorna o resultado como JSON.
    db.query(sql,(err,result)=>{
        if(err){
            console.log('Erro ao listar categorias!' ,err);
            return res.status(500).json({err:err.message});
        }

        return res.status(200).json(result);
    })
}