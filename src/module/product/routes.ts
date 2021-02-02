import { Router } from 'express';

import { ProductController } from './controller';

const routes = Router();

routes.post('/', ProductController.create);

export const ProductRoutes = routes;
