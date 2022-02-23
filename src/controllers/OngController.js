//exporta um objeto de dentro com os métodos
const crypto = require('crypto');
const connection = require('../database/connection'); //conexão com banco, com dois pontos (..) para voltar dois arquivos e acessar a pasta database

module.exports = {
    async create(request, response)
    {
        const { name, email, whatsapp, city, uf } = request.body; //acessar o corpo da requisição

        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de caracteres aleatórios, e os converte para string hexadecimal

        await connection('ongs').insert({  //conexão com banco de dados
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json( { id }); //devolve ao cliente na rota apenas o id da ong, pois com ele a ong se conecta à aplicação

    }    //método create 
};