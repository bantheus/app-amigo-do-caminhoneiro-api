CREATE TABLE "veiculos" (
	"id" text PRIMARY KEY NOT NULL,
	"usuario_id" text NOT NULL,
	"placa" text NOT NULL,
	"modelo" text NOT NULL,
	"ano" integer NOT NULL,
	"capacidade_carga" real NOT NULL,
	"tipo_carroceria" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "veiculos_placa_unique" UNIQUE("placa")
);
--> statement-breakpoint
ALTER TABLE "veiculos" ADD CONSTRAINT "veiculos_usuario_id_usuarios_id_fk" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;