import { Router } from 'express';

import { ProductController } from './controller';

const routes = Router();

routes.post('/', ProductController.create);
routes.get('/', ProductController.findAll);

export const ProductRoutes = routes;
