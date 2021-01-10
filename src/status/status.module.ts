import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { StatusController } from "./status.controller";

@Module({
	imports: [TerminusModule],
	controllers: [StatusController],
})
export class StatusModule {}
