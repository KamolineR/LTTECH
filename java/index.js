const express = require('express')
const app = express()
const bodyparser = require('bodyparser')
const connection = require('/models/database.js')

connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso.')
    });
    .catch((msgError) => {
        console.error(msgError)
    });

app.listen(8080, () => {
    console.log('Rodando')
});