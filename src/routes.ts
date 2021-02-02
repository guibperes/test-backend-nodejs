import { Router } from 'express';

import { ProductController } from './module/product';

const routes = Router();

routes.post('/products', ProductController.create);

export { routes };
