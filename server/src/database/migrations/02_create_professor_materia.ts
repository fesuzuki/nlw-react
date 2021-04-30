import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('professor_materia', table => {
        table.increments('id_professor_materia').primary();
        table.integer('id_professor').notNullable().references('id_professor').inTable('professores').onDelete('CASCADE').onUpdate('CASCADE');
        table.integer('id_materia').notNullable().references('id_materia').inTable('materias').onDelete('CASCADE').onUpdate('CASCADE');
        table.decimal('preco').notNullable;
    })
};
export async function down(knex:Knex){
    knex.schema.dropTable('professor_materia');
return
};