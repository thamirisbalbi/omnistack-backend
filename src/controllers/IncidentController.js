const { response } = require('express');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; //se page ainda não existir, é criado page com valor inicial igual a 1 

        const [count] = await connection('incidents').count(); //contará todos os casos //count entre colchetes retornará a primeira posição do array

        console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs_id', '=', 'incidents.ong_id') //compara o ong_id e trazendo os dados das ongs relacionada ao incidente cadastrado
            .limit(5)
            .offset((page - 1) * 5) //esquema simples de paginação
            .select('*');

        response.header('X-Total-Count', count['count(*)']); //retorna ao cabeçalho número total de páginas
        
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

        return response.json({ id })
    
    },
    
    async delete(request, response) {
        const { id } = request.params; //pegar o id no parâmetro de rotas
        const ong_id = request.headers.authorization; // busca o id da ong, para verificar se é a ong que criou o caso quem está querendo deletá-lo

        const incident = await connection('incidents')
            .where('id', id) //onde o id for igual ao atribuído acima
            .select('ong_id') //seleciona apenas a coluna ong_id
            .first(); //como retorna apenas um registro, é possível usar esse comando
        
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' }); //status não autorizado, enviando uma resposta escrita em formato json
        }

        await connection('incidents').where('id', id).delete(); //deleta o registro de dentro da tabela do banco de dados

        return response.status(204).send(); //retorna umaresposta ao frontEnd, quando não tem conteúdo
        
    }

}; //exporta objeto