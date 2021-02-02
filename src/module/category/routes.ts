import { Router } from 'express';

import { CategoryController } from './controller';

const routes = Router();

routes.post('/', CategoryController.create);

export const CategoryRoutes = routes;
