import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const secret = 'your_secret_key';

export const register = async (username: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    return await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
        },
    });
};

export const login = async (username: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }

    return jwt.sign({id: user.id}, secret, {expiresIn: '1h'});
};
