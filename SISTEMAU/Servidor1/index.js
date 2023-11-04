const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

require('dotenv').config();

// se crear servidor o aplicacion de express
const app = express();

conectarDB();
app.use(cors());//para ocupar un puerto diferente entre back y front

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario'))
app.use('/api/unidades', require('./routes/unidad'))
app.use('/api/registros', require('./routes/registro'))
// app.get('/', (req, res)=>{
//     res.send('Hola Mundo');
// })


// se levanta el server
app.listen(process.env.PORT,()=>{
    console.log('El servidor funciona')
})