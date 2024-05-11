import { Request, Response } from 'express';
import { SkillsService } from './Skills.serveice';

const createSkill = async (req: Request, res: Response) => {
  try {
    const skill = req.body.skill;
    const result = await SkillsService.createSkillIntoDb(skill);

    res.status(200).json({
      success: true,
      message: 'Skill added successfuly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllSkills = async (req: Request, res: Response) => {
  try {
    const result = await SkillsService.getSkillsFromDb();

    res.status(200).json({
      success: true,
      message: 'Skills are retrived successfuly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleSkill = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    const results = await SkillsService.getSingleSkillFromDb(Id);

    res.status(200).json({
      success: true,
      message: 'Single data is here',
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const SkillsController = {
  createSkill,
  getAllSkills,
  getSingleSkill,
};
