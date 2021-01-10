import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
	constructor(private configService: ConfigService) {}

	get app(): Kivi.AppConfigProps {
		return this.configService.get("app");
	}
}
