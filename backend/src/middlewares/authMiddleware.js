const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    // Pegar a autorização do cabeçalho
    const authHeader = req.headers['authorization'];

    // Verificar se no header está o token
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Token não encontrado ou mal formatado!' });
    }

    // Extrair o token **antes de usar**
    const token = authHeader.split(' ')[1];

    console.log("TOKEN RECEBIDO:", token);
    console.log("SECRET MIDDLEWARE:", process.env.JWT_SECRET);

    // Validar o token
    try {
        const dadosUser = jwt.verify(token, process.env.JWT_SECRET);
        // guarda os dados na propriedade user
        console.log("DADOS DECODIFICADOS:", dadosUser);
        req.user = {
            idUser: dadosUser.id,
            email: dadosUser.email
        }

        console.log("VALOR DE dadosUser.id:", dadosUser.id);

        next(); // manda pra o controller
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: 'Token inválido' });
    }
}

module.exports = authMiddleware;