"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    // Seed Admin
    await prisma.admin.create({
        data: {
            name: 'Super Admin',
            email: 'admin@example.com',
            password: 'hashed-password', // Make sure to hash passwords in real use
        },
    });
    // Seed Doctor
    const doctor = await prisma.doctor.create({
        data: {
            name: 'Dr. Jane Smith',
            email: 'jane@clinic.com',
            password: 'hashed-password',
            specialization: 'Cardiologist',
            bio: 'Expert in heart diseases and treatment.',
        },
    });
    // Seed Patient
    const patient = await prisma.patient.create({
        data: {
            name: 'John Doe',
            email: 'john@example.com',
            password: 'hashed-password',
        },
    });
    // Seed Blog Post
    await prisma.blog.create({
        data: {
            title: 'The Importance of Regular Checkups',
            content: 'Regular checkups can save lives...',
            author: 'Dr. Jane Smith',
            published: true,
        },
    });
    console.log('✅ Seeding complete.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
