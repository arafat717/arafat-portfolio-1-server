import { Schema, model } from 'mongoose';
import { TProject } from './Project.interface';

const ProjectSchema = new Schema<TProject>({
  imageUrl: { type: String, required: true },
  clientRepo: { type: String, required: true },
  serverRepo: { type: String, required: true },
  liveLink: { type: String, required: true },
  technology: { type: String, required: true },
  details: { type: String, required: true },
});

export const Project = model<TProject>('Project', ProjectSchema);
