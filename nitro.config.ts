//https://nitro.unjs.io/config
export default defineNitroConfig({
	experimental: {
		asyncContext: true,
	},
	runtimeConfig: {
		jwt: {
			secret: "",
		},
		logger: {
			level: "info",
		},
	},
	imports: {
		dirs: ["./utils/*", "./db/drizzle/*"],
	},
});
