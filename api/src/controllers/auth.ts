import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default class AuthController {
    async login(email: string, password: string) {
        try {
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user || !bcrypt.compareSync(password, user.password)) {
                throw new Error('Invalid email or password');
            }

            const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
            return { token };
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async register(email: string, password: string) {
        try {
            const hashedPassword = bcrypt.hashSync(password, 10);
            return await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword
                }
            });
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}
