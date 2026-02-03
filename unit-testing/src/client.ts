import { PrismaClient } from "./generated/prisma/client.js";

export const prisma = new PrismaClient({
  accelerateUrl: 'localhost:5173'
});