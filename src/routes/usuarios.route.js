const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.index);
router.get('/:id', usuariosController.getById);

module.exports = router;