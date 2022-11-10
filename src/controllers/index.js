function index(req, res) {
    res.render('index', {
        title: 'Página Inicial'
    }) 
}

module.exports = {
    index,
}