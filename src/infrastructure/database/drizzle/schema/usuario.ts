import { relations } from 'drizzle-orm';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { veiculos } from './veiculo';
import { viagens } from './viagem';

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

export const usuariosRelations = relations(usuarios, ({ many }) => ({
  veiculos: many(veiculos),
  viagens: many(viagens),
}));
