const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    //1️⃣ Receber email e senha
    const { email, senha } = req.body;

    if(!email || !senha){
        return res.status(400).json({message:'Email e senha são obrigatorios!'});
    }

    //2️⃣ Verificar se usuário existe (SELECT)
    const sql = 'SELECT * FROM utilizador WHERE email = ?'
    db.query(sql, [email], async (err, result) => {
        //3️⃣ Se não existir → 400
        if (err) {
            return res.status(500).json({ err: err.message });
        }

        if(result.length === 0){
            return res.status(400).json({message: 'Email ou senha inválidos!'});
        }

        if (result.length > 0) {
            //4️⃣ Se existir → usar bcrypt.compare
            const senhaDb = result[0].senhaHash;

            //5️⃣ Se senha incorreta → 400
            const isMatch = await bcrypt.compare(senha,senhaDb);
            if(!isMatch){
                return res.status(400).json({message: 'Email ou senha inválidos!'});
            }

            //6️⃣ Se correta → gerar JWT
            const payload ={
                id: result[0].idUser,
                email: result[0].email
            };
            const secret = process.env.JWT_SECRET;
            const options = {expiresIn :'2h'};
            const token = jwt.sign(payload,secret,options);

            //7️⃣ Retornar token
            return res.status(200).json({token})
        }

    });
 
}