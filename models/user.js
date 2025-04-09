const { Sequelize, Datatypes } = require('sequelize');
const connection = require('./database')

const user = connection.define('user', {
    nome: {
        type: Datatypes.STRING,
        allownull: false
    },
    sobrenome: {
        type: Datatypes.STRING,
        allownull: false
    },
    email: {
        type: Datatypes.STRING,
        allownull: false
    },
    senha: {
        type: Datatypes.STRING,
        allownull: false
    }
});

user.sync();

module.exports = user;