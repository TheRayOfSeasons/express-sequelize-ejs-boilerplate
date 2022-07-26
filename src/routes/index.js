import { Router } from 'express';
import dashboardRouter from './pages/dashboard.router';
import todoRouter from './pages/todo.router';

const router = new Router();

router.use('/', dashboardRouter);
router.use('/todo', todoRouter);

export default router;
