const mongoose=require('mongoose');

const UsuarioSchema=mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    rut:{
        type: String,
        require:true
    },
    phone:{
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    contrasena:{
        type:String,
        require:true
    },
    rol:{
        type:String,
        require:true
    }

});

module.exports=mongoose.model('Usuario', UsuarioSchema);