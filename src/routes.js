const express = require('express'); //importa a aplicação express para o arquivo routes

const OngController = require('./controllers/OngController'); //importa dados de ongcontroller dentro da aplicação 
const IncidentController = require('./controllers/IncidentController'); 
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController'); //importa SessionController

//apaga comando de conexão com banco por ela não ser mais utilizada nas rotas 

const routes = express.Router(); //desacopla as rotas do express em uma nova variável

routes.post('/sessions', SessionController.create); //cria rota para login

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); //cria cadastro de ong com método post

routes.get('/profile', ProfileController.index); //rota de casos específicos na aplicação

routes.get('/incidents', IncidentController.index); //cria rota que lista incidentes
routes.post('/incidents', IncidentController.create); // rota que cria os incidentes
routes.delete('/incidents/:id', IncidentController.delete); //route param com id do incidente que se quer deletar
module.exports = routes; //deixa as rotas disponíveis para o acesso: exporta a variável routes de dentro do arquivo