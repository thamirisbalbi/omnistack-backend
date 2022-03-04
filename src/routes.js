const express = require('express'); //importa a aplicação express para o arquivo routes

const OngController = require('./controllers/OngController'); //importa dados de ongcontroller dentro da aplicação 

const connection = require('./database/connection');

const routes = express.Router(); //desacopla as rotas do express em uma nova variável

//routes.get('/ongs', async (request, response) => {

//    const ongs = await connection('ongs').select('*'); // seleciona todos os campos de todos os registros dentro da tabela ongs 

//    return response.json(ongs);
     
//}); //rota do tipo get, pois se quer listar algo

routes.post('/ongs', OngController.create); //cria cadastro de ong com método post
 
//rota de criação da ong

module.exports = routes; //deixa as rotas disponíveis para o acesso: exporta a variável routes de dentro do arquivo