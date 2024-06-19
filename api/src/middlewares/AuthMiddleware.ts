// /src/middlewares/AuthMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../config/secret';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send('No token provided');
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).send('Token error');
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send('Token malformatted');
    }

    try {
        const decoded = jwt.verify(token, secret) as any;

        const storedToken = await prisma.jwtToken.findUnique({
            where: { token },
        });

        if (!storedToken || storedToken.expiresAt! < new Date()) {
            return res.status(401).send('Invalid token');
        }

        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.status(401).send('Invalid token');
    }
};
