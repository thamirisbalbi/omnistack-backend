const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body; //busca id através do corpo da requisição

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first(); //assim retorna apenas um resultado em vez de um array

        if(!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID' });  
        }

        return response.json(ong); //retorna nome da ong logada, caso o login dê certo
    }
}