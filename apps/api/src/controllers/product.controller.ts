import { Request, Response } from 'express';
import { prisma } from '@repo/database';

export class ProductController {

    static async getAll(req: Request, res: Response) {
        try {
            const products = await prisma.product.findMany({
                include: { category: true }
            });
            return res.json(products);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await prisma.product.findUnique({
                where: { id },
                include: { category: true, reviews: true }
            });
            if (!product) return res.status(404).json({ error: 'Product not found' });
            return res.json(product);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const { name, slug, description, price, stock, images, categoryId } = req.body;
            const product = await prisma.product.create({
                data: { name, slug, description, price, stock, images, categoryId }
            });
            return res.status(201).json(product);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
