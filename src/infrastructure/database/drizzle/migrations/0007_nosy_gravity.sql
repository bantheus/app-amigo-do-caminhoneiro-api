CREATE TABLE "despesas" (
	"id" text PRIMARY KEY NOT NULL,
	"viagem_id" text NOT NULL,
	"descricao" text NOT NULL,
	"valor" real NOT NULL,
	"tipo" text NOT NULL,
	"data" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "despesas" ADD CONSTRAINT "despesas_viagem_id_viagens_id_fk" FOREIGN KEY ("viagem_id") REFERENCES "public"."viagens"("id") ON DELETE no action ON UPDATE no action;