import express from 'express';
import { ProjectController } from './projects.controller';

const router = express.Router();

router.post('/create-project', ProjectController.createProject);
router.get('/', ProjectController.getAllProjects);
router.delete('/:Id', ProjectController.delateProject);
router.put('/:Id', ProjectController.updateProject);
router.get('/:Id', ProjectController.getSingleProject);

export const ProjectRoute = router;
