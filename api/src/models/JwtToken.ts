// /src/models/JwtToken.ts
import { PrismaClient, JwtToken as PrismaJwtToken } from '@prisma/client';

const prisma = new PrismaClient();

export default class JwtToken {
    private prismaJwtToken: PrismaJwtToken;

    constructor(prismaJwtToken: PrismaJwtToken) {
        this.prismaJwtToken = prismaJwtToken;
    }

    async save(): Promise<PrismaJwtToken> {
        return prisma.jwtToken.update({
            where: { id: this.prismaJwtToken.id },
            data: {
                token: this.prismaJwtToken.token,
                userId: this.prismaJwtToken.userId,
                expiresAt: this.prismaJwtToken.expiresAt,
            },
        });
    }

    static async create(token: string, userId: number, expiresAt: Date): Promise<PrismaJwtToken> {
        return prisma.jwtToken.create({
            data: {
                token,
                userId,
                expiresAt,
            },
        });
    }

    get id(): number {
        return this.prismaJwtToken.id;
    }

    get token(): string {
        return this.prismaJwtToken.token;
    }

    get userId(): number {
        return this.prismaJwtToken.userId;
    }

    get createdAt(): Date {
        return this.prismaJwtToken.createdAt;
    }

    get expiresAt(): Date | null {
        return this.prismaJwtToken.expiresAt;
    }
}
