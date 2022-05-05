const express = require('express')
const registroController = require('../controllers/registroController')

const routes = express.Router()

routes.get('/listar',registroController.listar)

routes.post('/cadastrar',registroController.cadastrar)

routes.delete('/deletar/:id',registroController.deletar)

module.exports = routes