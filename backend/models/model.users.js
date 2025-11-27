const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    user: {
        required: true,
        type: String,
        unique: true
    },
    email:{
        required: true,
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Email inválido']
    },
    password: {
        required: true,
        type: String,
    },
    role: { 
        type: String,
        enum: ['usuario', 'admin'],
        default: 'usuario'
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pedido"
    }]
}, {timestamps: true})

const User = mongoose.model("User", userSchema);
module.exports = User;