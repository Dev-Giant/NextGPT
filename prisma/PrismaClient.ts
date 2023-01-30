import { PrismaClient } from '@prisma/client';

// the code below is so that we won't have 10 prisma clients in dev
const globalForPrisma = global as unknown as { prisma: PrismaClient }

/**
 * This is prisma's client we mau use on the server side, firectly.
 * After making changes to the database schema, you need to run `prisma migrate` such as `npx prisma migrate dev --name init`
 */
export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ['query'], })


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma