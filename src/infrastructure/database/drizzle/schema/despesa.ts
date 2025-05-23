import { pgTable, real, text, timestamp } from 'drizzle-orm/pg-core';
import { viagens } from './viagem';

export const despesas = pgTable('despesas', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  viagemId: text('viagem_id')
    .notNull()
    .references(() => viagens.id),
  descricao: text('descricao').notNull(),
  valor: real('valor').notNull(),
  tipo: text('tipo').notNull(),
  data: timestamp('data').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
