CREATE TABLE "chat" (
	"message" text,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_user_id_task_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."task"("id") ON DELETE cascade ON UPDATE no action;