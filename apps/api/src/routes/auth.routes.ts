import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// Example protected route for testing
router.get('/me', authenticate, (req, res) => {
    res.json({ message: 'You are authenticated', user: req.user });
});

export default router;
