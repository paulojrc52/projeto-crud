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


async function list(req, res) {
    const users = await CustormersModel.find()

    res.render('list', {
        title: 'Listagem de usuários',
        users,
    })
}

async function formEdit(req, res) {
    const { id } = req.query

    const user = await CustormersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user
    }) 
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params

    const user = await CustormersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email


    user.save()

    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message: 'Edição salva com sucesso!'
    }) 
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await CustormersModel.deleteOne({_id: id})
    
    if (remove.deletedCount) {
        res.redirect('/list')
    }
}

module.exports = {
    add,
    index,
    list, 
    formEdit,
    edit,
    remove,
}