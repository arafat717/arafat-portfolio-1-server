import { Request, Response } from 'express';
import { ProjectService } from './Projects.service';

const createProject = async (req: Request, res: Response) => {
  try {
    const project = req.body.project;
    const result = await ProjectService.createProjectIntoDb(project);

    res.status(200).json({
      success: true,
      message: 'Project added successfuly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const result = await ProjectService.getProjectsFromDb();

    res.status(200).json({
      success: true,
      message: 'Projects are retrived successfuly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProjectController = {
  createProject,
  getAllProjects,
};
