import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
dotenv.config({ path: '.env' });

export default {
  schema: './src/infrastructure/database/drizzle/schema',
  out: './src/infrastructure/database/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
