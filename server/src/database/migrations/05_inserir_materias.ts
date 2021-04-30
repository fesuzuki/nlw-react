import Knex from 'knex';

export async function up(knex:Knex){
    return knex('materias').insert([
         { nome_materia:'Ciências' },
         { nome_materia:'Física' },
         { nome_materia:'Educação Física' },
         { nome_materia:'Matemática' },
         { nome_materia:'Geografia' },
         { nome_materia:'História' },
         { nome_materia:'Educação Artística' },
         { nome_materia:'Música' },
         { nome_materia:'Português' },
         { nome_materia:'Química' },
         { nome_materia:'Biologia' },
        ]);
};
export async function down(knex:Knex){
   
return
};