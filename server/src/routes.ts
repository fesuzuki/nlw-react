import express from 'express';
// import ClassesController from './controllers/ClassesController';
// import ConnectionsController from './controllers/ConnectionsController';
import MateriasController from './controllers/MateriasController';


const routes = express.Router();

// const classesController = new ClassesController();
// const connectionsController = new ConnectionsController();
const materiasController = new MateriasController();


// routes.post('/classes', classesController.create);

// routes.get('/classes', classesController.index);

// routes.post('/conexoes', connectionsController.create);

// routes.get('/conexoes', connectionsController.index);

routes.get('/materias',materiasController.index);
routes.post('/materias',materiasController.create);

export default routes;