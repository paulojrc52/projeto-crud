const CustormersModel = require('../models/customers')

function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const register = new CustormersModel ({
        name,
        age,
        email,
        password,
    })

    register.save()

    res.send('Cadastro realizado!')
}

module.exports = {
    add
}