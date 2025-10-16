const Sequelize = require ('sequelize');

const connection = new Sequelize('LTTECH','root','1234',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso.');
        return connection.sync();
    })
    .catch((MsgError) => {
        console.log(MsgError)
    });


module.exports = connection;