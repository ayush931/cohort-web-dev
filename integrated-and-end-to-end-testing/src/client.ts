import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { config } from "dotenv";
config();

export const prisma = new PrismaClient({
  adapter: new PrismaPg({
     connectionString: process.env.DATABASE_URL,
  })
});