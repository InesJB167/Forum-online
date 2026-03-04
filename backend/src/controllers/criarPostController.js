const db = require('../config/db');

exports.criarPost = (req,res) =>{
    //1️⃣ Usuário precisa estar logado → usar authMiddleware
    //2️⃣ Receber do body:conteudo idTopico
    const {texto,idTopico} =  req.body;
    if(!texto?.trim() || !idTopico){
        return res.status(400).json({message:'Preencha os campos corretamente!'});
    }
    //3️⃣ Pegar idUser do token
    const idUser = req.user.idUser;

    //4️⃣ Inserir no banco
    const sql = 'INSERT INTO postagem (texto,idTopico,idUser) values (?,?,?)';
    db.query(sql,[texto,idTopico,idUser],(err,result)=>{
        if(err){
            return res.status(500).json({err:err.message});
        }
        //5️⃣ Retornar sucesso com insertId
        const idPost = result.insertId;
        console.log('Id do post :', idPost);
        return res.status(201).json({message: 'Post criado com sucesso!'})

    });
   
}