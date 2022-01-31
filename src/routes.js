const express = require('express'); //importa a aplicação express para o arquivo routes

const routes = express.Router(); //desacopla as rotas do express em uma nova variável

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Cleiton Souza'
    });
}); 

module.exports = routes; //deixa as rotas disponíveis para o acesso: exporta a variável routes de dentro do arquivo