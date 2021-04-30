import { openDb } from '../database/connection';
import {
    Request,
    Response
} from 'express';


interface Aulas {
    :number;
    from: string;
    to:string;

}

export default class ProfessorController {
    async create(request: Request, response: Response) {

    }
    
    async index(request: Request, response: Response) {
        const   db = await openDb();
        const filters = request.query;
   
        const id_diaSemana = filters.week_day as string;
        const id_materia = filters.materia as string;
        const time = filters.time as string;
    
    
        if (!filters.week_day || !filters.subject || !filters.time ){
            const materias =  await db.all('SELECT * FROM professores');
            return response.json(materias);
        }

    }

}