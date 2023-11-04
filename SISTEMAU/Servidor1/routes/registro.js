
const express = require('express');

const router = express.Router();

const registroController=require('../controllers/registroController');




router.post('/',registroController.crearRegistro);
router.get('/', registroController.obtenerRegistros);
router.put('/:id', registroController.actualizarRegistros);
router.get('/:id', registroController.obtenerRegistro);
router.delete('/:id', registroController.eliminarRegistro);

module.exports=router;