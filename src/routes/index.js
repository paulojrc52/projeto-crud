const router = require('express').Router()



// Rotas
router.get('/',(req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})


module.exports = router