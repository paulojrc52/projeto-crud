const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')


// Rotas
router.get('/', IndexController.index)

// Registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// Listar
router.get('/list', CustomersController.list)

// Editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

module.exports = router