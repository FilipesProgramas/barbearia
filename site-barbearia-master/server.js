const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const client = require('./database')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/enviar', function (requisicao, resposta) {
    let {
        nome,
        email,
        telefone,
        mensagem
    } = requisicao.body

    client.query(`insert INTO banco_barbearia.tabela (nome,email,telefone,mensagem) VALUES ('${nome}','${email}','${telefone}','${mensagem}');`, function (err, res) {
        if (err) console.log(err)
        // else console.log(res)    
    })

    resposta.redirect('/')
})

app.get('/receber', function(requisicao, resposta){
    client.query(`SELECT * FROM banco_barbearia.tabela`, function (err, res) {        
        if (err) console.log(err)
        else resposta.send(JSON.stringify(res))
    })    
})

const porta = 3000
app.listen(porta, function () {
    console.log(`
    
        Server rodando em localhost na porta: ${porta} 
        http://localhost:${porta}

    `)
})