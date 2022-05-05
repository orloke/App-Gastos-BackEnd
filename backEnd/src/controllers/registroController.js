const Registros = require('../models/Registros')

const registroController = {
    async listar(req,res){
        console.log(req.body);
        const registros = await Registros.findAll()
        res.status(200).json(registros)
    },

    async cadastrar(req,res){
        const {date, category, title, value} = req.body

        await Registros.create({date, category, title, value})
        
        res.status(200).json('Registro criado!')
    },

    async deletar(req,res){
        const {id} = req.params
        await Registros.destroy({
            where:{
                id
            }
        })

        res.status(204).send()
    }
}

module.exports = registroController