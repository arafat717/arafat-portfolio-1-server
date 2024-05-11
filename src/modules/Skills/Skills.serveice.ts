import { TSkils } from './Skills.interface';
import { Skills } from './Skills.model';

const createSkillIntoDb = async (skill: TSkils) => {
  const result = await Skills.create(skill);
  return result;
};

const getSkillsFromDb = async () => {
  const result = await Skills.find();
  return result;
};

const getSingleSkillFromDb = async (id: string) => {
  const result = await Skills.findOne({ _id: id });
  return result;
};

export const SkillsService = {
  createSkillIntoDb,
  getSkillsFromDb,
  getSingleSkillFromDb,
};
