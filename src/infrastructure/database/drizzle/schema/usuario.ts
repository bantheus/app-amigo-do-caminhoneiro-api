import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const usuarios = pgTable('usuarios', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  nome: text('nome').notNull(),
  email: text('email').unique().notNull(),
  senhaHash: text('senha_hash').notNull(),
  cnh: text('cnh'),
  tempoDeExperiencia: integer('tempo_de_experiencia'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
