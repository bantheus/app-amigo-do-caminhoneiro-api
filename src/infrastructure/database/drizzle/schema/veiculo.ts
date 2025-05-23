import { integer, pgTable, real, text, timestamp } from 'drizzle-orm/pg-core';
import { usuarios } from './usuario';

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
