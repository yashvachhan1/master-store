import { Request, Response } from 'express';
import { prisma } from '@repo/database';

export class CategoryController {

    static async getAll(req: Request, res: Response) {
        try {
            const categories = await prisma.category.findMany();
            return res.json(categories);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const { name, slug, description } = req.body;
            const category = await prisma.category.create({
                data: { name, slug, description }
            });
            return res.status(201).json(category);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
