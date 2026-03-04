const db = require('../config/db');

exports.criarTopico = (req,res)=>{
    //Pega titulo, conteudo, idCategoria do req.body.
    const {desgnacao,descricao,idCategoria} = req.body;

    //Valida que todos esses campos estão preenchidos.
    if(!desgnacao || !descricao || !idCategoria){
        return res.status(400).json({message:'Preencha os campos!'});
    }

    //Pega o idUser de req.user (vem do token).
    const idUser = req.user.idUser ;

    //Cria query SQL .
    const sql = 'INSERT INTO topico (desgnacao,descricao,idCategoria,idUser) VALUES (?,?,?,?)';

    //Trata erros e retorna sucesso com idTopico.
    db.query(sql,[desgnacao,descricao,idCategoria,idUser],(err,result)=>{
        if(err){
            return res.status(500).json({err:err.message});
        }

        const idTopico = result.insertId;
        console.log('Id do topico criado',idTopico);
        return res.status(201).json({message:'Topico criado com sucesso!'});
        
    })
}