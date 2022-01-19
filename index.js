const express = require('express'); //importando funcionalidades do módulo express para dentro da variável express
// agora a variável express contém todas as funcionalidades disponíveis para o projeto
const app = express();

app.get('/', (request, response) => {
    return response.send('Hello World'); //node não observa alterações nem atualiza o servidor automaticamente
});

app.listen(3333); //cannot get: ainda não criou uma rota para aplicaçao