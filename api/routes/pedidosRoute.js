const {Router} = require('express')
const PedidoController = require('../controllers/PedidoController')

const router = Router()

router.get('/bomboniere', PedidoController.pegaTodosOsPedidos)
router.get('/bomboniere/:id', PedidoController.pegaUmPedido)
router.post('/bomboniere', PedidoController.criaPedido)

module.exports = router