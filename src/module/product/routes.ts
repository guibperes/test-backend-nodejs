import { Router } from 'express';

import { ProductController } from './controller';

const routes = Router();

routes.post('/', ProductController.create);
routes.get('/', ProductController.findAll);
routes.get('/:id', ProductController.findById);

export const ProductRoutes = routes;
