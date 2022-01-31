const express = require('express'); //importando funcionalidades do módulo express para dentro da variável express
// agora a variável express contém todas as funcionalidades disponíveis para o projeto

const routes = require('./routes'); //importa as rotas do arquivo routes utilizando require: é preciso usar o ./ para o programa saber que é um arquivo, não um pacote como o express

const app = express();

app.use(express.json()); // vindo antes das rotas, e converte o json em um objeto do JS : transforma o arquivo json do parâmetro em algo entendível pela aplicação
app.use(routes); //importante esse comando estar abaixo do app use express.json

/**
Rota: conjunto completo do link localhost / Recursos: o que vem depois da /. caminho para a rota.
**/

/**
 Métodos HTTP
 GET: buscar (retornar) uma informação do backend: utilizado quando acesso a rota no computador
 POST: Criar uma informação no back-end
 PUT: Alterar uma informação no back-end
 DELETE: Deletar uma informação no back-end
 o navegador utiliza para navegar a página somente o método GET
**/


app.listen(3333); //cannot get: ainda não criou uma rota para aplicaçao