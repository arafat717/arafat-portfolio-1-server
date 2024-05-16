/* eslint-disable @typescript-eslint/no-explicit-any */
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

const delateProject = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    console.log(Id);
    const result = await ProjectService.deleteProjectFromDB(Id);

    res.status(200).json({
      success: true,
      message: 'Users deleted successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const updateProject = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { Id } = req.params;
    const result = await ProjectService.updateProjectFromDB(Id, userData);

    res.status(200).json({
      success: true,
      message: 'Users updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const ProjectController = {
  createProject,
  getAllProjects,
  delateProject,
  updateProject,
};
