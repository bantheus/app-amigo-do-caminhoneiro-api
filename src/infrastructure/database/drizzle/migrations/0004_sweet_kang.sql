CREATE TABLE "viagens" (
	"id" text PRIMARY KEY NOT NULL,
	"usuario_id" text NOT NULL,
	"veiculo_id" text NOT NULL,
	"data_inicio" timestamp NOT NULL,
	"data_fim" timestamp,
	"origem" text NOT NULL,
	"destino" text NOT NULL,
	"quilometragem_inicial" real NOT NULL,
	"quilometragem_final" real,
	"tipo_carga" text,
	"peso_carga" real,
	"valor_frete" real,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_usuario_id_usuarios_id_fk" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_veiculo_id_veiculos_id_fk" FOREIGN KEY ("veiculo_id") REFERENCES "public"."veiculos"("id") ON DELETE no action ON UPDATE no action;