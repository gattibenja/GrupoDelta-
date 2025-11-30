const User = require("../models/model.users");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser'); 

exports.userSignUp = async (req, res, next) => {
    const {username, email, password, adminPassword} = req.body
    if(!username || !email || !password){
        return res.status(400).json({error: "Todos los campos son necesario"})
    }
    try{
      
      if(await User.findOne({user: username})){
          const error = new Error("El nombre de usuario esta en uso")   
          error.status = 400;
          return next(error);
        }
        if(await User.findOne({email: email})){
            const error = new Error("El email esta en uso")   
            error.status = 400;
            return next(error);
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            user: username,
            email,
            password: hashedPassword,
        });
       
        const savedUser = await newUser.save()

        console.log("Usuario creado correctamente");
        res.status(201).json({
            message: "Usuario creado correctamente",
            _id: savedUser._id,
            username: savedUser.user,
            email: savedUser.email
        });
        

    }catch(err){
        console.error("Error al registrar el usuario: ", err.message)
        err.status = 404
        next(err)
    }
    
}

exports.userLogIn = async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            const error = new Error("Credenciales invalidas")
            error.status = 401
            return next(error)
        }
        const isValidPassword = await bcrypt.compare(req.body.password, user.password)
        if(!isValidPassword){
            const error = new Error("Credenciales invalidas")
            error.status = 403
            return next(error)
        }
        const token = jwt.sign(
            {
                id: user._id, 
                user: user.user, 
                role: user.role
            },
                process.env.JWT_SECRET,
                {expiresIn: '1h'}
    );

    
    const cookieOptions = {
      httpOnly: true,
      secure: true, 
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000 // 1 día 
    };

    
    res.cookie('token', token, cookieOptions);

    return res.status(200).json({ 
      user: {
        message: "Credenciales validadas correctamente",
        id: user._id,
        user: user.user,
        email: user.email,
        role: user.role
      }
    });

    }catch(err){
        const error = {
            message: err.message,
            status: 500
        }
        next(error)
    }
}

exports.logOut = async (req, res, next) => {
    res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite:'none',
  });

  res.json({ message: "Logout exitoso" });

}

exports.getUsers = async (req, res, next) => {
    try{
        const users = await User.find({}).select('-password')
        res.json({Usuarios: users})

    }catch(err){
        const error = {
            message: "Error al obtener todos los usuarios: " + err.message,
            status: 500
        }
        next(err)
    }
}

exports.changeUserRole = async (req, res, next) => {
    try{
        const {id: targetUserId} = req.params
        const {newRole} = req.body

         if (!['user', 'admin'].includes(newRole)) {
            return res.status(400).json({ error: "Rol inválido. Solo se permite 'user' o 'admin'." });
        }
        
       const updatedUser = await User.findByIdAndUpdate(
            targetUserId,
            { role: newRole },
            { new: true } //
        ).select('-password'); 
         if (!updatedUser) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }

         res.status(200).json({
            message: `Rol del usuario ${updatedUser.user} actualizado a ${newRole}`,
            user: updatedUser
        });
    }catch(err){
        const error = {
            message: err.message,
            status: 500
        }
        next(err)
    }

}