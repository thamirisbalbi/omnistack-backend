const express = require('express'); //importa a aplicação express para o arquivo routes

const OngController = require('./controllers/OngController'); //importa dados de ongcontroller dentro da aplicação 
const IncidentController = require('./controllers/IncidentController'); 


//apaga comando de conexão com banco por ela não ser mais utilizada nas rotas 

const routes = express.Router(); //desacopla as rotas do express em uma nova variável

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); //cria cadastro de ong com método post
  
routes.post('/incidents', IncidentController.create);

module.exports = routes; //deixa as rotas disponíveis para o acesso: exporta a variável routes de dentro do arquivo