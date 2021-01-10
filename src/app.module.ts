import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RateLimiterGuard, RateLimiterModule } from "nestjs-rate-limit";
import { AppConfigModule } from "./config/config.module";
import { StatusModule } from "./status/status.module";
import { AuthModule } from "./auth/auth.module";
import { MessagesModule } from "./messages/messages.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { UsersModule } from "./users/users.module";

@Module({
	imports: [
		RateLimiterModule.forRoot({
			points: 100,
			duration: 5,
			keyPrefix: "global",
		}),
		TypeOrmModule.forRoot({
			type: "mongodb",
			url: process.env.MONGODB_URI,
			synchronize: false,
			logger: "debug",
			useUnifiedTopology: true,
			useNewUrlParser: true,
			autoLoadEntities: true,
		}),
		AppConfigModule,
		StatusModule,
		AuthModule,
		MessagesModule,
		NotificationsModule,
		UsersModule,
	],
	providers: [{ provide: APP_GUARD, useClass: RateLimiterGuard }],
})
export class AppModule {}
