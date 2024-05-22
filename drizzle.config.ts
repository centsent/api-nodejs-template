import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "mysql",
	out: "./db/drizzle",
	schema: "./db/drizzle/schema.ts",
	dbCredentials: {
		url: process.env.DB_URL,
	},
	// Print all statements
	verbose: true,
	// Always ask for confirmation
	strict: true,
});
