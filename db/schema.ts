import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const entries = pgTable('entries', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  contents: text('contents').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
})

export type InsertEntry = typeof entries.$inferInsert
