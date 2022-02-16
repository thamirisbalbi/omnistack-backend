const express = require('express'); //importa a aplicação express para o arquivo routes
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router(); //desacopla as rotas do express em uma nova variável

routes.post('/ongs', (request, response) => { //cria cadastro de ong com método post
    const { name, email, whatsapp, city, uf } = request.body; //acessar o corpo da requisição

    const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de caracteres aleatórios, e os converte para string hexadecimal

    connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,

    }) //connection ('nome da tabela que se quer inserir dados').comando para inserir dados dentro da tabela
    //dentro do insert terá todas as informações da tabela de ongs
    return response.json();
}); 

module.exports = routes; //deixa as rotas disponíveis para o acesso: exporta a variável routes de dentro do arquivo