import { relations } from 'drizzle-orm';
import { integer, pgTable, real, text, timestamp } from 'drizzle-orm/pg-core';
import { documentacaoVeiculos } from './documentacao-veiculo';
import { manutencoes } from './manutencao';
import { usuarios } from './usuario';
import { viagens } from './viagem';

export const veiculos = pgTable('veiculos', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  usuarioId: text('usuario_id')
    .notNull()
    .references(() => usuarios.id),
  placa: text('placa').unique().notNull(),
  modelo: text('modelo').notNull(),
  ano: integer('ano').notNull(),
  capacidadeCarga: real('capacidade_carga').notNull(),
  tipoCarroceria: text('tipo_carroceria').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const veiculosRelations = relations(veiculos, ({ one, many }) => ({
  usuario: one(usuarios, {
    fields: [veiculos.usuarioId],
    references: [usuarios.id],
  }),
  manutencoes: many(manutencoes),
  documentacaoVeiculos: many(documentacaoVeiculos),
  viagens: many(viagens),
}));
