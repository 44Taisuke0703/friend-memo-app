import { PrismaClient } from "../../generated/prisma";
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };
if (!globalForPrisma.prisma) {
    try {
        globalForPrisma.prisma = new PrismaClient();
    } catch {
        throw new Error(
            "@prisma/client did not initialize yet. Please run 'npx prisma generate' and restart the server."
        );
    }
}
const prisma = globalForPrisma.prisma;
export default prisma;