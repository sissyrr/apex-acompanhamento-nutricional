const service = require('./service')

const { Router } = require('express')
const router = Router()

router.post('/', function (req, res) {
    const dadosNutricionista = req.body
    service.salvarNutricionistas(dadosNutricionista)

    res.sendStatus(204)
})

router.get('/', function (req, res) {
    service.buscarNutricionistas()
    res.sendStatus(204)
})

module.exports = router