const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async() => {
    try{
        await mongoose.connect(process.env.DB_MONGO,{
        })
        console.log('Base de datos conectada');
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
    }
}

module.exports = conectarDB