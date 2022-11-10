const router = require('express').Router()

const CustomersController = require('../controllers/customers')


// Rotas
router.get('/',(req, res) => {
    res.render('index', {
        title: 'Página Inicial'
    }) 
})

router.get('/register',(req, res) => {
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
})

// CONTROLLER
router.post('/register/add', CustomersController.add)



module.exports = router