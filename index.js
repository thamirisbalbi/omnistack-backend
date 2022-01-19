const express = require('express'); //importando funcionalidades do módulo express para dentro da variável express
// agora a variável express contém todas as funcionalidades disponíveis para o projeto
const app = express();

/**
Rota: conjunto completo do link localhost / Recursos: o que vem depois da /. caminho para a rota.
**/

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Thamiris Balbi'
    });
});
app.listen(3333); //cannot get: ainda não criou uma rota para aplicaçao