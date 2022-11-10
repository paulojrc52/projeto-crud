const CustormersModel = require('../models/customers')
const { crypto } = require('../utils/password')

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustormersModel ({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()

    res.send('Cadastro realizado!')
}

module.exports = {
    add
}