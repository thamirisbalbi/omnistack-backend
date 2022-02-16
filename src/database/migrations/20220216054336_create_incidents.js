
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //os casos cadastrados são auto incrementados na numeração
        table.string('title').notNullable(); //nome da tabela, não pode ser nulo
        table.string('description').notNullable();
        table.decimal('value').notNullable(); //valor armazenado em decimais
        
       table.string('ong_id').notNullable() //coluna que armazena o id da ong (em string) que criou o incidente(relacionamento)

       table.foreign('ong_id').references('id').inTable('ongs'); //cria chave estrangeira referente a id de dentro da tabela ongs
    }); 
};


exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
