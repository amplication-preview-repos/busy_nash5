import * as graphql from "@nestjs/graphql";
import { ExperimentResolverBase } from "./base/experiment.resolver.base";
import { Experiment } from "./base/Experiment";
import { ExperimentService } from "./experiment.service";

@graphql.Resolver(() => Experiment)
export class ExperimentResolver extends ExperimentResolverBase {
  constructor(protected readonly service: ExperimentService) {
    super(service);
  }
}
