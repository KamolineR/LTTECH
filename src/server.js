const express = require('express')
const bodyparser = require('bodyparser')
const connection = require('./config/database')

//Conexão com o banco de dados e execução do servidor.
connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso.');
        return connection.sync();
    })
    .catch((MsgError) => {
        console.log(MsgError)
    });


const app = express();

app.listen(8080, () => {
    console.log('Rodando')
});