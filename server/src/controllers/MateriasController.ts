import { openDb } from '../database/connection';
import {
    Request,
    Response
} from 'express';


export default class MateriasController {

    async create(request: Request, response: Response) {
        const {
            nome_materia
        } = request.body;
        const   db = await openDb();

        const resultSelect = await db.all('Select nome_materia FROM materias WHERE nome_materia=?',nome_materia);
        if (resultSelect.length > 0){           
            return response.status(200).send();
        }
       const resultInsert = await db.all('insert into materias(nome_materia) values (?)',nome_materia);
       return response.status(201).send(); 
    }
    async index(request: Request, response: Response) {
        const   db = await openDb();
        const materias =   await db.all('SELECT * FROM materias');
        return response.json(materias);
    }
}