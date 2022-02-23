const express = require('express'); //importa a aplicação express para o arquivo routes
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router(); //desacopla as rotas do express em uma nova variável

routes.get('/ongs', async (request, response) => {

    const ongs = await connection('ongs').select('*'); // seleciona todos os campos de todos os registros dentro da tabela ongs 

    return response.json(ongs);
    
}); //rota do tipo get, pois se quer listar algo

routes.post('/ongs', async (request, response) => { //cria cadastro de ong com método post
    const { name, email, whatsapp, city, uf } = request.body; //acessar o corpo da requisição

    const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de caracteres aleatórios, e os converte para string hexadecimal

     await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,

    }) //connection ('nome da tabela que se quer inserir dados').comando para inserir dados dentro da tabela
    //dentro do insert terá todas as informações da tabela de ongs
    return response.json( { id }); //devolve ao cliente na rota apenas o id da ong, pois com ele a ong se conecta à aplicação
}); 

module.exports = routes; //deixa as rotas disponíveis para o acesso: exporta a variável routes de dentro do arquivo