CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"task" text NOT NULL,
	"description" text,
	"category" text,
	"priority" text,
	"createdAt" timestamp DEFAULT now()
);
