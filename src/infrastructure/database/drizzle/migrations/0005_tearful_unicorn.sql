CREATE TABLE "abastecimentos" (
	"id" text PRIMARY KEY NOT NULL,
	"viagem_id" text NOT NULL,
	"data" timestamp NOT NULL,
	"tipo_combustivel" text NOT NULL,
	"preco_litro" real NOT NULL,
	"quantidade_litros" real NOT NULL,
	"quilometragem" real NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "abastecimentos" ADD CONSTRAINT "abastecimentos_viagem_id_viagens_id_fk" FOREIGN KEY ("viagem_id") REFERENCES "public"."viagens"("id") ON DELETE no action ON UPDATE no action;