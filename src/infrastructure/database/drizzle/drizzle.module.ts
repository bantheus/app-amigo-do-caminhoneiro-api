import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'DRIZZLE_DB',
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          connectionString: configService.get<string>('DATABASE_URL'),
        });
        return drizzle(pool, { schema });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['DRIZZLE_DB'],
})
export class DrizzleModule {}
