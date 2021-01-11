import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import * as helmet from "fastify-helmet";
import * as multer from "fastify-multer";
import {
	FastifyAdapter,
	NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { SocketIoAdapter } from "./common/socket-adapter/socket.adapter";

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);
	app.useWebSocketAdapter(new SocketIoAdapter(app));
	app.getHttpAdapter()
		.getInstance()
		.register(multer.contentParser)
		.register(helmet);
	app.enableCors();
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
		}),
	);
	await app.listen(process.env.PORT || 3000, "0.0.0.0");
}
bootstrap();
