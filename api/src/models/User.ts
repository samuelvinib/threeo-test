// /src/models/User.ts
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default class User {
    private prismaUser: PrismaUser;

    constructor(prismaUser: PrismaUser) {
        this.prismaUser = prismaUser;
    }

    static async findByEmail(email: string): Promise<PrismaUser | null> {
        return prisma.user.findUnique({
            where: { email:email }
        });
    }

    static async create(email: string, password: string): Promise<User> {
        const existingUser = await this.findByEmail(email);
        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await this.setPassword(password);

        const prismaUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        return new User(prismaUser);
    }

    async save(): Promise<User> {
        const updatedUser = await prisma.user.update({
            where: { id: this.prismaUser.id },
            data: {
                email: this.prismaUser.email,
                password: this.prismaUser.password,
            },
        });
        return new User(updatedUser);
    }

    private static async setPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    get id(): number {
        return this.prismaUser.id;
    }

    get email(): string {
        return this.prismaUser.email;
    }

    get password(): string {
        return this.prismaUser.password;
    }
}
