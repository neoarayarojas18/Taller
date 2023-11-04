const mongoose=require('mongoose');

const UnidadSchema=mongoose.Schema({
    nombre:{
        type:String,
        require:true
    }

});

module.exports=mongoose.model('Unidad', UnidadSchema);