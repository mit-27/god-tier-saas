import { pgTable, serial, text, uuid, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const post = pgTable("posts", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title").notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    body: text("body").notNull(),
});

export const user = pgTable("users", {
    id: varchar("id").primaryKey(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).notNull().unique(),
    emailVerified: boolean("email_verfied").default(false),
    image: text("image"),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow()
})

