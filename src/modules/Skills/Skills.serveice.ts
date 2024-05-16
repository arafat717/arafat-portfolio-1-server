/* eslint-disable @typescript-eslint/no-explicit-any */
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

const deleteSkillFromDB = async (id: string) => {
  const result = await Skills.findOneAndDelete({ _id: id });
  return result;
};

const updateSkillFromDB = async (id: string, userData: any) => {
  const result = await Skills.findOneAndUpdate({ _id: id }, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const SkillsService = {
  createSkillIntoDb,
  getSkillsFromDb,
  getSingleSkillFromDb,
  deleteSkillFromDB,
  updateSkillFromDB,
};
