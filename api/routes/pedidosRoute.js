const {Router} = require('express')
const PedidoController = require('../controllers/PedidoController')

const router = Router()

router.get('/bomboniere', PedidoController.pegaTodosOsPedidos)
router.get('/bomboniere/:id', PedidoController.pegaUmPedido)
router.post('/bomboniere', PedidoController.criaPedido)
router.put('/bomboniere/:id', PedidoController.atualizaPedido)
router.delete('/bomboniere/:id', PedidoController.apagaPedido)

module.exports = router