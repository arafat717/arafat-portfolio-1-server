/* eslint-disable @typescript-eslint/no-explicit-any */
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

const deleteProjectFromDB = async (id: string) => {
  const result = await Project.findOneAndDelete({ _id: id });
  return result;
};

const updateProjectFromDB = async (id: string, userData: any) => {
  const result = await Project.findOneAndUpdate({ _id: id }, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const getSingleProjectFromDb = async (id: string) => {
  const result = await Project.findOne({ _id: id });
  return result;
};

export const ProjectService = {
  createProjectIntoDb,
  getProjectsFromDb,
  deleteProjectFromDB,
  updateProjectFromDB,
  getSingleProjectFromDb,
};
