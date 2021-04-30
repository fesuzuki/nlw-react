import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('materias', table => {
        table.increments('id_materia').primary();
        table.string('nome_materia').notNullable();
    })
};
export async function down(knex:Knex){
    knex.schema.dropTable('materias');
return
};