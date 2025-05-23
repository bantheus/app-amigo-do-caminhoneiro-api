import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { veiculos } from './veiculo';

export const documentacaoVeiculos = pgTable('documentacao_veiculos', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  veiculoId: text('veiculo_id')
    .notNull()
    .references(() => veiculos.id),
  dataVencimento: timestamp('data_vencimento').notNull(),
  numeroDocumento: text('numero_documento').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const documentacaoVeiculosRelations = relations(
  documentacaoVeiculos,
  ({ one }) => ({
    veiculo: one(veiculos, {
      fields: [documentacaoVeiculos.veiculoId],
      references: [veiculos.id],
    }),
  }),
);
