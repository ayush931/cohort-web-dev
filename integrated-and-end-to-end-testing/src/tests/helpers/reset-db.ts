import { PrismaClient } from "../../../src/generated/prisma/client.js";

const prisma = new PrismaClient();

export async function clearDB() {
  prisma.request.deleteMany()
}