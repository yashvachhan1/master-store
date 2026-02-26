import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
    static async register(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            const result = await AuthService.registerCustomer(name, email, password);
            return res.status(201).json(result);
        } catch (error: any) {
            return res.status(400).json({ error: error.message || 'Registration failed' });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            const result = await AuthService.login(email, password);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(401).json({ error: error.message || 'Login failed' });
        }
    }
}
