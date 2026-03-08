//listar topicos por cattegoria
const db = require('../config/db');

exports.listarTopico = (req,res) =>{

    //1️⃣ Receber idCategoria
    const { idCategoria } = req.params;

    //2️⃣ Verificar se categoria existe
    const sqlVerficarCategoria = 'SELECT idCategoria FROM categoria WHERE idCategoria = ?';

    db.query(sqlVerficarCategoria,[idCategoria],(err,result)=>{
        if(err){
            return res.status(500).json({err:err.message});
        }

        if(result.length === 0){
            return res.status(404).json({message:'Categoria não encontrada'});
        }

        //3️⃣ Buscar tópicos da categoria
        const sql = 'SELECT desgnacao, descricao FROM topico WHERE idCategoria = ?';

        db.query(sql,[idCategoria],(err,topicos)=>{
            if(err){
                return res.status(500).json({err:'Erro ao buscar tópicos'});
            }

            //4️⃣ Retornar tópicos
            return res.status(200).json(topicos);
        })

    })
}