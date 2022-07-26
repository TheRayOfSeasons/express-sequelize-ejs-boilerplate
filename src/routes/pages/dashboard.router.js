import { Router } from 'express';
import DashboardController from '../../controllers/dashboard.controller';

const dashboardRouter = new Router();

dashboardRouter.get('/', DashboardController.home);

export default dashboardRouter;
