const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body; //busca id através do corpo da requisição

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first(); //assim retorna apenas um resultado em vez de um array

    

    }
}