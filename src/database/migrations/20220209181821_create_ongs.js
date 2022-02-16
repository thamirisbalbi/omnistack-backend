
exports.up = function(knex) {
    knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable(); //nome da tabela, não pode ser nulo
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //estado, passando o tamanho do texto armazenado dentro
    }); //criar uma nova tabela com nome ongs, recebendo uma função de segundo parâmetro, que recebe a tabela como parâmetro
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
