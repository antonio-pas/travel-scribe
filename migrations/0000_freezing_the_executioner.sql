CREATE TABLE IF NOT EXISTS "entries_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"contents" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
