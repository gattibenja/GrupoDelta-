
const jwt = require('jsonwebtoken')


const isAdmin = (req, res, next) => {
    try{
        if(req.user && req.user.role === 'admin'){
        next()
    }else {
        console.log('Error de admin')
        res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador.' });
    }
    }catch(err){
        console.log('Error de admin:', err.message)
        res.status(500).json({error: err.message})

    }
}

module.exports = {isAdmin}