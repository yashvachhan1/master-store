import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_dev_key';
const EXPIRES_IN = '7d'; // Token valid for 7 days

export const generateToken = (userId: string, role: string) => {
    return jwt.sign({ id: userId, role }, JWT_SECRET, {
        expiresIn: EXPIRES_IN,
    });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};
