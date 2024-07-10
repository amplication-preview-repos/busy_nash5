import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExperimentService } from "./experiment.service";
import { ExperimentControllerBase } from "./base/experiment.controller.base";

@swagger.ApiTags("experiments")
@common.Controller("experiments")
export class ExperimentController extends ExperimentControllerBase {
  constructor(protected readonly service: ExperimentService) {
    super(service);
  }
}
