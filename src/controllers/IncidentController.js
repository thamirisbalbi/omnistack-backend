const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body; 
    }   //cria incidente
} //exporta objeto