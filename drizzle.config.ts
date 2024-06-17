import { defineConfig } from "drizzle-kit"
export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './migrations',
  dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL!
  }
})
