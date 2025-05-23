CREATE TABLE "manutencoes" (
	"id" text PRIMARY KEY NOT NULL,
	"veiculo_id" text NOT NULL,
	"data" timestamp NOT NULL,
	"descricao" text NOT NULL,
	"custo" real NOT NULL,
	"tipo_manutencao" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "manutencoes" ADD CONSTRAINT "manutencoes_veiculo_id_veiculos_id_fk" FOREIGN KEY ("veiculo_id") REFERENCES "public"."veiculos"("id") ON DELETE no action ON UPDATE no action;