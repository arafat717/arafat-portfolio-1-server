import express from 'express';
import { ProjectController } from './projects.controller';

const router = express.Router();

router.post('/create-project', ProjectController.createProject);
router.get('/', ProjectController.getAllProjects);

export const ProjectRoute = router;
