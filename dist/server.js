"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load env variables from .env file
const prisma = new client_1.PrismaClient();
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
        app_1.default.listen(PORT, () => {
            console.log(`🚀 Server running on https://your-app-name.onrender.com (PORT: ${PORT})`);
        });
    }
    catch (error) {
        console.error('❌ Server failed to start:', error);
        process.exit(1);
    }
};
startServer();
