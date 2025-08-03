import app from './app';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config(); // Load env variables from .env file

const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Gracefully shut down Prisma on termination
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

const startServer = async () => {
  try {
    // Connect to database
    await prisma.$connect();
    console.log('🟢 Connected to the database successfully');

    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on https://doctorpatientapi.onrender.com (PORT: ${PORT})`);
    });
  } catch (error) {
    console.error('❌ Server failed to start:', error);
    process.exit(1);
  }
};

startServer();
