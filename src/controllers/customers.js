const CustormersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

function index(req, res) {
    res.render('register', {
        title: defaultTitle,
    })
}

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

    res.render('register',{
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!'
    }
    )
}


async function listUsers(req, res) {
    const users = await CustormersModel.find()

    res.render('listUsers', {
        title: 'Listagem de usuários',
        users,
    })
}

module.exports = {
    add,
    index,
    listUsers, 
}