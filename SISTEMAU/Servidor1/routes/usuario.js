//ruta para usuario

const express = require('express');
const { check } = require('express-validator');
const { crearUsuario, obtenerUsuarios, actualizarUsuario, obtenerUsuario, eliminarUsuario, loginUsuario, revalidarToken } = require('../controllers/usuarioController');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = express.Router();



//api/usuarios

router.post('/create', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('rut', 'El rut es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('contrasena','La contraseña es obligatoria').isLength({min: 5}),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    validarCampos
], crearUsuario);
router.get('/listar', obtenerUsuarios);
router.put('/actu:id', actualizarUsuario);
router.get('/ob:id', obtenerUsuario);
router.delete('/delete:id', eliminarUsuario);


//login y validacion
router.post('/login', [
    check('email','El email es obligatorio').isEmail(),
    check('contrasena','La contraseña es obligatoria').isLength({min: 5}),
    validarCampos
], loginUsuario);
router.get('/renovar', validarJWT , revalidarToken);

module.exports = router;