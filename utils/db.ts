import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Get the database
 */
export const useDb = () => {
  return prisma;
};
