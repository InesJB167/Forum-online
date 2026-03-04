

function isAdmin(req,res,next){

    //1️⃣ Verificar se req.user existe
    if(!req.user){
        return res.status(401).json({message:'Não autenticado!'});
    }
    //2️⃣ Verificar se req.user.role === 'admin'
    if(req.user.role !== 'ADMIN'){
        //3️⃣ Se não for → 403
        return res.status(403).json({message:'Acesso negado! Apenas admin pode fazer isso.'});
    }
   
    //4️⃣ Se for → next()
    next()

}

module.exports = isAdmin;
