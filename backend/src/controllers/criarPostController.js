const db = require('../config/db');

exports.criarPost = (req, res) => {


    console.log("BODY:", req.body);
    //1️⃣ Usuário precisa estar logado → usar authMiddleware
    //2️⃣ Receber do body:conteudo idTopico
    const { texto, idTopico } = req.body;
    console.log(texto, idTopico);

    if (!texto?.trim() || !idTopico) {
        return res.status(400).json({ message: 'Preencha os campos corretamente!' });
    }
    //3️⃣ Pegar idUser do token
    const idUser = req.user.idUser;
    const nameUser = req.user.nameUser;

    //4️⃣ Inserir no banco
    const sql = 'INSERT INTO postagem (texto,idTopico,idUser) values (?,?,?)';
    db.query(sql, [texto, idTopico, idUser], (err, result) => {
        if (err) {
            return res.status(500).json({ err: err.message });
        }
        //5️⃣ Retornar sucesso com insertId
        const idPost = result.insertId;
        console.log('Id do post :', idPost);

        //para usar o socket
        const io = req.app.get("io");

        const mensagem = {
            idPostagem: idPost,
            texto,
            idUser,
            nameUser
        };

        console.log("USER DO TOKEN:", req.user);
        console.log("USER DO TOKEN username:", req.user.nameUser);

        // envia para todos via socket
        io.emit("novaMensagem", mensagem);

        // responde a requisição
        return res.status(201).json(mensagem);

    });

}