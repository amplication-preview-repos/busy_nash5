import { Experiment as TExperiment } from "../api/experiment/Experiment";

export const EXPERIMENT_TITLE_FIELD = "id";

export const ExperimentTitle = (record: TExperiment): string => {
  return record.id?.toString() || String(record.id);
};
