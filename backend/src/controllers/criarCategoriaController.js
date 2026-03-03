const db = require('../config/db');

exports.criarCategoria = (req,res) =>{
    //pega os dados pra criar a categoria
    const {nomeCategoria,descricao} = req.body;

    if(!nomeCategoria || !descricao){
        return res.status(400).json({message:"Preencha todos os campos!"});
    }
    //pegar o idUser do token
    const idUser = req.user.idUser;

    //mandar pra o banco 
    const sql ='INSERT INTO categoria (nomeCategoria,descricao,idUser) values (?,?,?)'
    db.query(sql,[nomeCategoria,descricao,idUser],(err,result)=>{
        if(err){
            return res.status(500).json({err:"Erro ao criar a categoria!"});
        }

        res.status(200).json({message:"Categoria criada com sucesso!"});
    })

}