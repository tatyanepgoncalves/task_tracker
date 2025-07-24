import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const tasks = pgTable('tasks', {
  id: uuid().primaryKey().defaultRandom(),
  task: text().notNull(),
  description: text(),
  category: text(),
  priority: text(),
  createdAt: timestamp().defaultNow(),
})
