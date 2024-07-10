import { Module } from "@nestjs/common";
import { ExperimentModuleBase } from "./base/experiment.module.base";
import { ExperimentService } from "./experiment.service";
import { ExperimentController } from "./experiment.controller";
import { ExperimentResolver } from "./experiment.resolver";

@Module({
  imports: [ExperimentModuleBase],
  controllers: [ExperimentController],
  providers: [ExperimentService, ExperimentResolver],
  exports: [ExperimentService],
})
export class ExperimentModule {}
