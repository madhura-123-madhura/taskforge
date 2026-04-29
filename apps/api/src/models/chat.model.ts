import { integer } from "drizzle-orm/pg-core";
import { text } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { user } from "./user.model";
import { task } from "./task.model";

export const chat = pgTable("chat", {
    message: text(),
    userId: integer("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    taskId: integer("user_id").notNull().references(() => task.id, { onDelete: "cascade" })
}) 