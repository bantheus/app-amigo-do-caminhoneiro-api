CREATE TABLE "documentacao_veiculos" (
	"id" text PRIMARY KEY NOT NULL,
	"veiculo_id" text NOT NULL,
	"data_vencimento" timestamp NOT NULL,
	"numero_documento" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "documentacao_veiculos" ADD CONSTRAINT "documentacao_veiculos_veiculo_id_veiculos_id_fk" FOREIGN KEY ("veiculo_id") REFERENCES "public"."veiculos"("id") ON DELETE no action ON UPDATE no action;