const express = require("express")
const cors = require('cors')
require ("dotenv").config();
const app = express()
const PORT = process.env.PORT || 4000

const {peticionesRouter} = require("./routers/peticiones.js");
const {loggerMiddleware} = require("./middleWares/logger.js")
const {notFoundHandler} = require("./middlewares/notFoundHandler.js");


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(loggerMiddleware);
app.use("/api/productos", peticionesRouter)
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

app.listen(PORT, () => {
    console.log(`Lograste levantar el server en el PORT: ${PORT}!!! 🚀 `)
})