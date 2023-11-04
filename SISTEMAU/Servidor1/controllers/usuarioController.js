const Usuario = require("../models/Usuario");

const { response } = require("express");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");


// crear un nuevo usuario
const crearUsuario = async(req,res = response )=>{

    const {nombre, apellido, rut, phone, email, contrasena, rol} = req.body;
    try {
        //verificar si existe correo

        let usuario = await Usuario.findOne({ email:email });
        if (usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con el email ingresado'
            });
        }

        //Crear usuario
        usuario=new Usuario( req.body );

        // Hash a la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.contrasena = bcrypt.hashSync( contrasena, salt);

        // Generar JWT

        const token = await generarJWT(usuario.id, nombre);

        //Se crea usuario en DB
        await usuario.save();
        
        //Respuesta de exito
        //res.send(usuario);
        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            nombre,
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// listar usuarios
const obtenerUsuarios = async(req,res = response )=>{
    try {

        const usuarios=await Usuario.find();
        res.json(usuarios);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}

// editar un usuario 
const actualizarUsuario = async(req,res = response )=>{
    try {

        
        const {nombre,apellido,rut,phone,email,contrasena,rol}=req.body;
        let usuario=await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'no existe el usuario'})
        }

        usuario.nombre=nombre;
        usuario.apellido=apellido;
        usuario.rut=rut;
        usuario.phone=phone;
        usuario.email=email;
        //usuario.contrasena=contrasena;
        const salt = bcrypt.genSaltSync();
        usuario.contrasena = bcrypt.hashSync( contrasena, salt);
        usuario.rol=rol;

        usuario= await Usuario.findOneAndUpdate({_id: req.params.id}, usuario,{new:true});

        res.json(usuario);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
        
    }
}

// eliminar un usuario en específico
const eliminarUsuario = async(req,res = response)=>{
    try {

        let usuario=await Usuario.findById(req.params.id);
        

        if(!usuario){
            res.status(404).json({msg:'no existe el usuario'})
        }

        await Usuario.findOneAndRemove({_id:req.params.id});
        res.json({msg: 'Usuario eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}


// obtener solo un usuario
const obtenerUsuario = async(req,res = response )=>{
    try {

        let usuario=await Usuario.findById(req.params.id);
        

        if(!usuario){
            res.status(404).json({msg:'no existe el usuario'})
        }

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema');
    }

}

const loginUsuario = async (req, res = response) =>{

    const { email, contrasena } = req.body;

    try {

        const DBUSER = await Usuario.findOne({ email });

        if ( !DBUSER ){
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales no concuerdan: Email'
            });
        }

        // Confirmar contraseña 

        const validContrasena = bcrypt.compareSync( contrasena, DBUSER.contrasena);
        
        if ( !validContrasena ){
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales no concuerdan: Contraseña'
            });
        }

        // Generar JWT

        const token = await generarJWT(DBUSER.id, DBUSER.nombre);

        // Respuesta

        res.json({
            ok: true,
            uid: DBUSER.id,
            nombre: DBUSER.nombre,
            token
        })


        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador'
        });
        
    }
}

const revalidarToken = async (req, res = response) =>{

    const { uid, nombre } = req;

    const token = await generarJWT(uid, nombre);

    return res.json({
        ok: true,
        uid,
        nombre,
        token
    });
}


module.exports = {
    crearUsuario,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,
    obtenerUsuario,
    loginUsuario,
    revalidarToken
}