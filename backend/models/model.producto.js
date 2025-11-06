const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    nombre: {
        type:String,
        required: true,
        unique: true
    },
    descripcion:{
        type:String,
        //required: true
    },
    medidas:{
        type:String,
       // required: true,
        
    },
    acabado:{
        type:String,
       // required: true
    },
    peso:{
        type:String,
       // required: true
    },
    capacidad:{
        type:String,
    },
    precio:{
        type:Number,
        required: true
    },
    stock:{
        type:Number,
        min:0
    },
    imagen:{
        type:String,
        //required: true,  
    },
    featured: {
        type:Boolean
    }

}, {timestamps:true})

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;