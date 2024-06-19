// /src/services/authServices.ts
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { secret } from '../config/secret';
import JwtToken from '../models/JwtToken';
import User from "../models/User";

const prisma = new PrismaClient();

export class AuthService {
    async register(email: string, password: string): Promise<PrismaUser> {
        return User.create(email, password);
    }

    async login(email: string, password: string): Promise<string> {
        const user = await User.findByEmail(email);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        console.log(passwordMatch);
        if (!passwordMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
        console.log(typeof user.id)
        await this.saveToken(user.id, token);

        return token;
    }

    private async saveToken(userId: number, token: string): Promise<void> {
        await JwtToken.create(token, userId, (new Date(Date.now() + 60 * 60 * 1000)),
    );
    }
}
