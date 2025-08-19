const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/database');
const user = require('./models/user');  

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection.authenticate()
    .then(() => {
        console.log('Conexão com banco de dados bem sucedida');
        return connection.sync();
    })
    .catch(err => {
        console.error('Erro ao tentar conectar o banco de dados', err);
    });

app.post('/user', async (req, res) => {
    try {
        const { nome, sobrenome, email, senha } = req.body;
        const novoUsuario = await user.create({ nome, sobrenome, email, senha });
        res.status(201).json(novoUsuario);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao criar usuario' });
    }   
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost${port}`);
});