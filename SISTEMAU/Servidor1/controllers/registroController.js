const Registro = require("../models/Registro");

exports.crearRegistro=async(req,res)=>{
    try {
        let registro;


        registro=new Registro(req.body);

        await registro.save();
        res.send(registro);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRegistros=async(req,res)=>{
    try {

        const registros=await Registro.find();
        res.json(registros);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}

exports.actualizarRegistros=async(req,res)=>{
    try {

        
        const {nombre}=req.body;
        let registro=await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({msg:'no existe el registro'})
        }

        registro.nombre=nombre;

        registro= await Registro.findOneAndUpdate({_id: req.params.id}, registro,{new:true});

        res.json(registro);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
        
    }
}


exports.eliminarRegistro=async(req,res)=>{
    try {

        let registro=await Registro.findById(req.params.id);
        

        if(!registro){
            res.status(404).json({msg:'no existe el registro'})
        }

        await Registro.findOneAndRemove({_id:req.params.id});
        res.json({msg: 'Registro eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}


exports.obtenerRegistro=async(req,res)=>{
    try {

        let registro=await Registro.findById(req.params.id);
        

        if(!registro){
            res.status(404).json({msg:'no existe el registro'});
        }

        res.json(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}
