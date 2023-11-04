const Unidad = require("../models/Unidad");

exports.crearUnidad=async(req,res)=>{
    try {
        let unidad;


        unidad=new Unidad(req.body);

        await unidad.save();
        res.send(unidad);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUnidades=async(req,res)=>{
    try {

        const unidades=await Unidad.find();
        res.json(unidades);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}

exports.actualizarUnidad=async(req,res)=>{
    try {

        
        const {nombre}=req.body;
        let unidad=await Unidad.findById(req.params.id);

        if(!unidad){
            res.status(404).json({msg:'no existe el usuario'})
        }

        unidad.nombre=nombre;

        unidad= await Unidad.findOneAndUpdate({_id: req.params.id}, unidad,{new:true});

        res.json(unidad);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
        
    }
}


exports.eliminarUnidad=async(req,res)=>{
    try {

        let unidad=await Unidad.findById(req.params.id);
        

        if(!unidad){
            res.status(404).json({msg:'no existe el usuario'})
        }

        await Unidad.findOneAndRemove({_id:req.params.id});
        res.json({msg: 'Unidad eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}


exports.obtenerUnidad=async(req,res)=>{
    try {

        let unidad=await Unidad.findById(req.params.id);
        

        if(!unidad){
            res.status(404).json({msg:'no existe la unidad'});
        }

        res.json(unidad);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}
