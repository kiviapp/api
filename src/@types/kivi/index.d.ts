import { HttpStatus } from "@nestjs/common";

export {};

declare global {
	namespace Kivi {
		interface KiviAPIResponse<T> {
			statusCode: HttpStatus;
			message: string | string[];
			error?: string | string[];
			data: T;
		}
		interface KiviWSResponse {
			[prop: string]: unknown;
		}
		interface AppConfigProps {
			port: number;
		}
	}
}
