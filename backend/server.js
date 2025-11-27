const express = require("express")
const app = express()
const cors = require('cors')
require ("dotenv").config();
const { connectDB } = require("./db/db.js")
const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('./models/model.users');
const PORT = process.env.PORT || 4000
const cookieParser = require('cookie-parser'); // 1. Importar cookie-parser

app.use(express.static(path.join(__dirname, 'public')));
const routerUsers = require("./routers/users.routes.js")
const routerPeticiones = require('./routers/productos.routes.js')
const cartRouter = require('./routers/cart.router.js')
const orderRouter = require('./routers/orders.routes.js')
const {loggerMiddleware} = require("./middlewares/logger.js")
const {notFoundHandler} = require("./middlewares/notFoundHandler.js");
const whitelist = [
    'http://localhost:5173', 
    process.env.FRONTEND_URL  // La URL de tu frontend en producción (Vercel)
];

// 2. Configura las opciones de CORS dinámicamente
const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        // Permite peticiones sin origen (como Postman o apps móviles) o si el origen está en la whitelist
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
};

// 3. Usa las opciones de CORS en tu aplicación
app.use(cors(corsOptions));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.json({ 
        message: "API de Muebleria Jota Hermanos operativa.",
        endpoints: "/api/productos"
    });
});

app.get('/api/auth/me', async (req, res) => {
  try {
    const token = req.cookies.token; 
    if (!token) {
      return res.status(401).json({ error: 'No autenticado: no hay token' });
    }

    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Buscar al usuario en la base de datos sin la contraseña
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ user: { id: user._id, user: user.user, email: user.email } });
  } catch (err) {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
});

app.use("/api/users", routerUsers)
app.use("/api/productos", routerPeticiones)
app.use("/api", cartRouter)
app.use('/api', orderRouter)
app.use(notFoundHandler);


app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status,
            message: err.message || 'Ha ocurrido un error en el servidor.',
            stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
        }
    })
})


connectDB()
    .then(() => {
        console.log('✅ Base de Datos conectada')
        // Inicio del servidor
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
        });
    })
    .catch((error) => {
        console.error('❌ Error al conectar a la base de datos:', error.message)
        process.exit(1)
    });
