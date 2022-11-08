const express = require('express')
const path = require('path')

const db = require('./database')

// Conexão com o banco de dados
db.connect()

const app = express()

// Definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Definindo arquivos públicos
app.use(express.static(path.join(__dirname, "public")))

// Habilitando server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

// Rotas
app.get('/',(req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})


// 404 Error (not found)
app.use((req, res) => { // middleware
    res.send('Página não encontrada!')
})

// Executando Servidor  
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))