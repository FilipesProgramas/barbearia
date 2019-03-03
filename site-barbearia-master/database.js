var mysql = require('mysql');

var client = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: ''
});

client.connect(function (err) {
    if (err) console.log(err)
    // else console.log('connected!')
})


client.query('create database if not exists banco_barbearia;', function (err, res) {
    if (err) console.log(err)
    // else console.log(res)
})

client.query(`create table if not exists banco_barbearia.tabela ( id int auto_increment primary key, nome varchar(40),email varchar(40),telefone varchar(40),mensagem  varchar(40) ) `, function (err, res) {
    if (err) console.log(err)
    // else console.log(res)
})




module.exports = client