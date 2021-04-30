import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('conexoes', table => {
        table.increments('id').primary();
       
        table.integer('id_professor').notNullable().references('id').inTable('professores').onDelete('CASCADE').onUpdate('CASCADE');
        table.timestamp('criadoEm').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable();
    })
};
export async function down(knex:Knex){
    knex.schema.dropTable('conexoes');
return
};