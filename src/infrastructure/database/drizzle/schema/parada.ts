import { relations } from 'drizzle-orm';
import { integer, pgTable, real, text, timestamp } from 'drizzle-orm/pg-core';
import { viagens } from './viagem';

export const paradas = pgTable('paradas', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  viagemId: text('viagem_id')
    .notNull()
    .references(() => viagens.id),
  local: text('local').notNull(),
  motivo: text('motivo').notNull(),
  tempoParadoMinutos: integer('tempo_parado_minutos').notNull(),
  latitude: real('latitude'),
  longitude: real('longitude'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const paradasRelations = relations(paradas, ({ one }) => ({
  viagem: one(viagens, {
    fields: [paradas.viagemId],
    references: [viagens.id],
  }),
}));
