CREATE TABLE "paradas" (
	"id" text PRIMARY KEY NOT NULL,
	"viagem_id" text NOT NULL,
	"local" text NOT NULL,
	"motivo" text NOT NULL,
	"tempo_parado_minutos" integer NOT NULL,
	"latitude" real,
	"longitude" real,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "paradas" ADD CONSTRAINT "paradas_viagem_id_viagens_id_fk" FOREIGN KEY ("viagem_id") REFERENCES "public"."viagens"("id") ON DELETE no action ON UPDATE no action;