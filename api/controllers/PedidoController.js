const database = require('../models')

class PedidoController {
    static async pegaTodosOsPedidos(req, res){
        try {
            const todosOsPedidos = await database.Pedidos.findAll()
            return res.status(200).json(todosOsPedidos)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmPedido(req, res){
        const {id} = req.params
        try {
            const umPedido = await database.Pedidos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umPedido)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaPedido(req, res){
        const novoPedido = req.body
        try {
            const novoPedidoCriado = await database.Pedidos.create(novoPedido)
            return res.status(200).json(novoPedidoCriado)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
    }

    //atualizar um registro
    
    //deletar um registro
}

module.exports = PedidoController