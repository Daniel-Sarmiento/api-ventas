const Usuario = require('../models/usuario.model');

const index = async (req, res) => {
    try {
        const usuarios = await Usuario.getAll();

        return res.status(200).json({
            message: "usuarios obtenidos exitosamente",
            usuarios
        });
    } catch (error) {
        return res.status(500).json({
            message: "ocurrió un error al obtener los usuarios",
            error: error.message
        })
    }
}

// usuarios/1
const getById = async (req, res) => {
    try {
        const idUsuario = req.params.id;
        const usuario = await Usuario.getById(idUsuario);

        if (!usuario) {
            return res.status(404).json({
                message: "el usuario no existe"
            })
        }

        return res.status(200).json({
            message: "usuario obtenido exitosamente",
            usuario
        })

    } catch (error) {
        return res.status(500).json({
            message: "ocurrió un error al obtener el usuario",
            error: error.message
        })
    }
}

module.exports = {
    index,
    getById
}