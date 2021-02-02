import { Router } from 'express';

import { ProductRoutes } from './module';

const routes = Router();

routes.use('/products', ProductRoutes);

export { routes };
