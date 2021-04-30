import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('aulas', table => {
        table.increments('id_aula').primary();
        table.integer('diaSemana').notNullable();
        table.integer('inicio').notNullable;
        table.integer('fim').notNullable()
        table.integer('id_professor_materia').notNullable().references('id_professor_materia').inTable('professor_materia').onDelete('CASCADE').onUpdate('CASCADE');
    })
};
export async function down(knex:Knex){
    knex.schema.dropTable('aulas');
return
};