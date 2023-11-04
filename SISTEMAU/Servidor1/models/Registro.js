
const mongoose=require('mongoose');

const RegistroSchema=mongoose.Schema({
    nombre:{
        type:String,
        require:true
    }

});

module.exports=mongoose.model('Registro', RegistroSchema);