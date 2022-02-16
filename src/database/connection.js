const knex = require('knex');
const configuration = require('../../knexfile');

const conection = knex(configuration.development); //passa como parâmetro a conexão de desenvolvimento

module.exports = connection;