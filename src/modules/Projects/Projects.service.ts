import { TProject } from './Project.interface';
import { Project } from './Projects.model';

const createProjectIntoDb = async (project: TProject) => {
  const result = await Project.create(project);
  return result;
};

const getProjectsFromDb = async () => {
  const result = await Project.find();
  return result;
};

export const ProjectService = {
  createProjectIntoDb,
  getProjectsFromDb,
};
