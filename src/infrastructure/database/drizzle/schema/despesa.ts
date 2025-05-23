import { relations } from 'drizzle-orm';
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

export const despesasRelations = relations(despesas, ({ one }) => ({
  viagem: one(viagens, {
    fields: [despesas.viagemId],
    references: [viagens.id],
  }),
}));
