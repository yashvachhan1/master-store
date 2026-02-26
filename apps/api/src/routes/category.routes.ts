import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';
import { authenticate, requireAdmin } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', CategoryController.getAll);

// Protected Admin Route
router.post('/', authenticate, requireAdmin, CategoryController.create);

export default router;
