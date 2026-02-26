import { prisma, User, Role } from '@repo/database';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';

export class AuthService {
    static async registerCustomer(name: string, email: string, passwordRaw: string) {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(passwordRaw, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: Role.CUSTOMER,
            },
        });

        const token = generateToken(user.id, user.role);
        return { user: this.sanitize(user), token };
    }

    static async login(email: string, passwordRaw: string) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(passwordRaw, user.password);
        if (!isMatch) {
            throw new Error('Invalid email or password');
        }

        const token = generateToken(user.id, user.role);
        return { user: this.sanitize(user), token };
    }

    // Helper to remove password from returned user object
    private static sanitize(user: User) {
        const { password, ...safeUser } = user;
        return safeUser;
    }
}
