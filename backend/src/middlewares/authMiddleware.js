const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
    //pegando a autorizaçao do cabeçalho da requisiçao
    const authHeader = req.headers['authorization'];

    //verificar se no header esta o token
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Token não encontrado ou mal formatado!' });
    }

    //extrair o token
    const token = authHeader.split(' ')[1];

    //Validar o token
    try {
        const dadosUser = jwt.verify(token, process.env.JWT_SECRET);//verifica
        req.user = dadosUser;//guarda os dados na propriedade user
        next(); //manda pra o controller
    } catch {
        res.status(401).json({ message: 'Token inválido' });
    }


}

module.exports = authMiddleware;