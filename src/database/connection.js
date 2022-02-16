const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //passa como parâmetro a conexão de desenvolvimento

module.exports = connection;