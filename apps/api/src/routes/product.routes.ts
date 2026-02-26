import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { authenticate, requireAdmin } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);

// Protected Admin Route
router.post('/', authenticate, requireAdmin, ProductController.create);

export default router;
