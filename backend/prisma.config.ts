import { defineConfig } from '@prisma/config';
import 'dotenv/config';

export default defineConfig({
    schema: 'prisma/schema.prisma',
    // Prisma 7 uses adapter or accelerate, but for migrate we might need this or just env
    // creating a standard config that points to env
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});
