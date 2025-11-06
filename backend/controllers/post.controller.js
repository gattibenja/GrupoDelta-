const Producto = require('../models/model.producto');
const mongoose = require('mongoose')
exports.createProduct = async (req, res, next) => {
    try{
        const datosNuevoProducto = req.body;
        console.log("Datos recibidos para crear producto: ", datosNuevoProducto)
        const nuevoProducto = new Producto(datosNuevoProducto);
        const productoGuardado = await nuevoProducto.save()

        res.status(201).json({
            mensaje: 'Usuario creado con exito',
            usuario: productoGuardado
        });
    }catch(err){
            console.error("Error al crear usuario: ", err.message);
            err.status = 400
            next(err);
            
    }
};

exports.createManyProducts = async (req, res, next) => {
    try{
        const arrayProductos = req.body;
        console.log("Array de datos recibidos: ", arrayProductos)

        if (!Array.isArray(arrayProductos)) {
            const error = new Error("La petición debe contener un array de productos.");
            error.status = 400;
            return next(error);
        }
        console.log("Datos recibidos para crear múltiples productos (Cantidad): ", arrayProductos.length);
        const productosGuardados = await Producto.insertMany(arrayProductos)

        res.status(201).json({
            mensaje: 'Productos creados con exito',
            usuario: productosGuardados
        });
    }catch(err){
            console.error("Error al crear usuario: ", err.message);
            err.status = 400
            next(err);
            
    }
};

    exports.getProductos = async(req, res, next) => {
        try{
            const productos = await Producto.find({})
            res.status(200).json(productos);
        }catch(err){
            console.error('Error al obtener usuarios: ', err.message)
            err.status = 400
            next(err)
        }
    };

    exports.getProductoById = async (req, res, next) =>{
        try{
         const productoId = req.params.id;
         console.log('Buscando producto con ID:', productoId);
         const producto = await Producto.findOne({id: productoId});
         if(!producto){
            const error = new Error('Producto no encontrado')
            error.status = 404
            return next(error)
         }
         res.status(200).json(producto)

        }catch(err){
            console.error('Error al encontrar producto: ', err.message)
            err.status = 400
            next(err)
        }
    };

    exports.updateProduct = async (req, res, next) => {

        try{
            const productoId = req.params.id
            console.log('Buscando producto a actualizar')
            const producto = Producto.findOne({id: productoId})
            if(!producto){
                const error = new Error('No se encontro un producto con ese id');
                error.status(404)
                return next(error)
            }
            console.log('Producto encontrado')
            const datosActualizados = req.body
            console.log(`Actualizando el producto con Id: ${productoId}`)
            const productoActualizado = await Producto.findByIdAndUpdate(productoId, datosActualizados, {new: true, runValidators: true})
            if(!productoActualizado){
                const error = new Error(`No se pudo actualizar el usuario con ID: ${productoId} `);
                error.status(404)
                return next(error)
            }
            res.status(200).json({
                mensaje: 'producto actualizado con exito',
                producto: productoActualizado
            });
        }catch(err){
            console.error('Error al actualizar el producto: ', err.message)
            err.status = 400
            next(err)
        }
    };

    exports.deleteProductById = async (req, res, next) => {
        try{
            const productoId = req.params.id
            console.log('Buscando producto a eliminar')
            const productoEliminado = await Producto.deleteOne({id: productoId});
            if(!productoEliminado){
                const error = new Error('Error eliminar producto')
                error.status = 400
                return next(error)
            }
            res.status(200).json({
                mensaje: 'producto eliminado con exito',
                producto: productoEliminado
            })
        }catch(err){
            console.error('Error al eliminar el producto: ', err.message)
            err.status = 400
            next(err) 
        }

    };