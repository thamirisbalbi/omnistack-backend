const { response } = require('express');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const incidents = await connection('incidents').select('*');
        
        return response.json(incidents);
    },
     

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        }); //cria incidente

        return response.json({ id });

    },
    
    async delete(request, respose) {
        const { id } = request.params; //pegar o id no parâmetro de rotas
        const ong_id = request.headers.authorization; // busca o id da ong, para verificar se é a ong que criou o caso quem está querendo deletá-lo

        const incident = await connection('incidents')
            .where('id', id) //onde o id for igual ao atribuído acima
            .select('ong_id') //seleciona apenas a coluna ong_id
            .first() //como retorna apenas um registro, é possível usar esse comando
        
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' }); //status não autorizado, enviando uma resposta escrita em formato json
        }

        
    }

}; //exporta objeto