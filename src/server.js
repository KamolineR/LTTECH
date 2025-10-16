
const connection = require('./config/database');

//Execução do servidor.
const app = require('./app');

app.listen(8080, () => {
    console.log('Rodando')
});