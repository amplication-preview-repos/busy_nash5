/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Experiment as PrismaExperiment } from "@prisma/client";

export class ExperimentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ExperimentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.experiment.count(args);
  }

  async experiments(
    args: Prisma.ExperimentFindManyArgs
  ): Promise<PrismaExperiment[]> {
    return this.prisma.experiment.findMany(args);
  }
  async experiment(
    args: Prisma.ExperimentFindUniqueArgs
  ): Promise<PrismaExperiment | null> {
    return this.prisma.experiment.findUnique(args);
  }
  async createExperiment(
    args: Prisma.ExperimentCreateArgs
  ): Promise<PrismaExperiment> {
    return this.prisma.experiment.create(args);
  }
  async updateExperiment(
    args: Prisma.ExperimentUpdateArgs
  ): Promise<PrismaExperiment> {
    return this.prisma.experiment.update(args);
  }
  async deleteExperiment(
    args: Prisma.ExperimentDeleteArgs
  ): Promise<PrismaExperiment> {
    return this.prisma.experiment.delete(args);
  }
}
