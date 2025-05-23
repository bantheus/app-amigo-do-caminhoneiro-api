import { relations } from 'drizzle-orm';
import { pgTable, real, text, timestamp } from 'drizzle-orm/pg-core';
import { veiculos } from './veiculo';

export const manutencoes = pgTable('manutencoes', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  veiculoId: text('veiculo_id')
    .notNull()
    .references(() => veiculos.id),
  data: timestamp('data').notNull(),
  descricao: text('descricao').notNull(),
  custo: real('custo').notNull(),
  tipoManutencao: text('tipo_manutencao').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const manutencoesRelations = relations(manutencoes, ({ one }) => ({
  veiculo: one(veiculos, {
    fields: [manutencoes.veiculoId],
    references: [veiculos.id],
  }),
}));
