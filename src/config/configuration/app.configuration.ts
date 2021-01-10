import { registerAs } from "@nestjs/config";

export const appConfiguration = registerAs("app", () => ({
	port: parseInt(process.env.PORT as string) || 3000,
}));
