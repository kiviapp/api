import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppConfigService } from "./config.service";
import { appConfiguration } from "./configuration";

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [appConfiguration],
		}),
	],
	providers: [AppConfigService],
})
export class AppConfigModule {}
