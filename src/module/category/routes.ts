import { Router } from 'express';

import { CategoryController } from './controller';

const routes = Router();

routes.post('/', CategoryController.create);
routes.get('/', CategoryController.findAll);
routes.get('/:id', CategoryController.findById);

export const CategoryRoutes = routes;
