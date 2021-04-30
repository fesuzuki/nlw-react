import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('professores', table => {
        table.increments('id_professor').primary();
        table.string('nome').notNullable();
        table.string('urlFoto');
        table.string('whatsapp').notNullable();
        table.integer('bio').notNullable();
    })
};
export async function down(knex:Knex){
    knex.schema.dropTable('professores');
return
};