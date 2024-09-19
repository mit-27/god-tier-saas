import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";



export const posts = pgTable("posts", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    body: text("body").notNull(),
});