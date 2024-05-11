import { Schema, model } from 'mongoose';
import { TSkils } from './Skills.interface';

const SkillsSchema = new Schema<TSkils>({
  imageUrl: { type: String, required: true },
  skillName: { type: String, required: true },
});

export const Skills = model<TSkils>('Skills', SkillsSchema);
