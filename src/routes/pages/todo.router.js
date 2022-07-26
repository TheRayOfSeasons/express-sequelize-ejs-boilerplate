import { Router } from 'express';
import TodoController from '../../controllers/todo.controller';

const todoRouter = new Router();

todoRouter.get('/', TodoController.list);
todoRouter.get('/detail/:id', TodoController.showDetails);
todoRouter.get('/create', TodoController.create);
todoRouter.post('/create', TodoController.submitCreate);
todoRouter.get('/update/:id', TodoController.update);
todoRouter.post('/update/:id', TodoController.submitUpdate);
todoRouter.post('/delete/:id', TodoController.delete);

export default todoRouter;
