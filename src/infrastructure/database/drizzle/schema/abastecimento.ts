import { pgTable, real, text, timestamp } from 'drizzle-orm/pg-core';
import { viagens } from './viagem';

export const abastecimentos = pgTable('abastecimentos', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  viagemId: text('viagem_id')
    .notNull()
    .references(() => viagens.id),
  data: timestamp('data').notNull(),
  tipoCombustivel: text('tipo_combustivel').notNull(),
  precoLitro: real('preco_litro').notNull(),
  quantidadeLitros: real('quantidade_litros').notNull(),
  quilometragem: real('quilometragem').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
