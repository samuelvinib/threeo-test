// /src/services/authServices.ts
import { User as PrismaUser } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { secret } from '../config/secret';
import JwtToken from '../models/JwtToken';
import User from "../models/User";

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

        if (!passwordMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
        await this.saveToken(user.id, token);

        return token;
    }

    private async saveToken(userId: number, token: string): Promise<void> {
        await JwtToken.create(token, userId, (new Date(Date.now() + 60 * 60 * 1000)),
    );
    }
}
