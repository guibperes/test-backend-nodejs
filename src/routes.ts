import { Router } from 'express';

import { ProductRoutes, CategoryRoutes } from './module';

const routes = Router();

routes.use('/products', ProductRoutes);
routes.use('/categories', CategoryRoutes);

export { routes };
