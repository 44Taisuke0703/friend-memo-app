import { PrismaClient } from "../..//generated/prisma";
let prisma: PrismaClient;
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };
if (!globalForPrisma.prisma) {
    try {
        globalForPrisma.prisma = new PrismaClient();
    } catch (e) {
        throw new Error(
            "@prisma/client did not initialize yet. Please run 'npx prisma generate' and restart the server."
        );
    }
}
prisma = globalForPrisma.prisma;
export default prisma;