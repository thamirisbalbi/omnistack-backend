const express = require('express'); //importa a aplicação express para o arquivo routes

const routes = express.Router(); //desacopla as rotas do express em uma nova variável

routes.post('/ongs', (request, response) => { //cria cadastro de ong com método post
    const data = request.body; //acessar o corpo da requisição

    console.log(data); //garante que os dados estão chegando 

    return response.json();
}); 

module.exports = routes; //deixa as rotas disponíveis para o acesso: exporta a variável routes de dentro do arquivo