import { relations } from 'drizzle-orm';
import { pgTable, real, text, timestamp } from 'drizzle-orm/pg-core';
import { abastecimentos } from './abastecimento';
import { despesas } from './despesa';
import { paradas } from './parada';
import { usuarios } from './usuario';
import { veiculos } from './veiculo';

export const viagens = pgTable('viagens', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  usuarioId: text('usuario_id')
    .notNull()
    .references(() => usuarios.id),
  veiculoId: text('veiculo_id')
    .notNull()
    .references(() => veiculos.id),
  dataInicio: timestamp('data_inicio').notNull(),
  dataFim: timestamp('data_fim'),
  origem: text('origem').notNull(),
  destino: text('destino').notNull(),
  quilometragemInicial: real('quilometragem_inicial').notNull(),
  quilometragemFinal: real('quilometragem_final'),
  tipoCarga: text('tipo_carga'),
  pesoCarga: real('peso_carga'),
  valorFrete: real('valor_frete'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const viagensRelations = relations(viagens, ({ one, many }) => ({
  usuario: one(usuarios, {
    fields: [viagens.usuarioId],
    references: [usuarios.id],
  }),
  veiculo: one(veiculos, {
    fields: [viagens.veiculoId],
    references: [veiculos.id],
  }),
  abastecimentos: many(abastecimentos),
  paradas: many(paradas),
  despesas: many(despesas),
}));
