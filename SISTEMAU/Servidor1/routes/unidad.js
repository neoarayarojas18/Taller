const express = require('express');

const router = express.Router();

const unidadController=require('../controllers/unidadController');


//api/unidad



router.post('/',unidadController.crearUnidad);
router.get('/', unidadController.obtenerUnidades);
router.put('/:id', unidadController.actualizarUnidad);
router.get('/:id', unidadController.obtenerUnidad);
router.delete('/:id', unidadController.eliminarUnidad);

module.exports=router;