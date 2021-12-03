const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/bomboniere', (req, res) => res
    .status(200)
    .send({mensagem: 'boas-vindas à API da bomboniere'
}))

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app