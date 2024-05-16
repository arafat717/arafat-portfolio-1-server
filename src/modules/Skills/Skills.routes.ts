import express from 'express';
import { SkillsController } from './Skills.controller';

const router = express.Router();

router.post('/create-skill', SkillsController.createSkill);
router.get('/', SkillsController.getAllSkills);
router.get('/:Id', SkillsController.getSingleSkill);
router.delete('/:Id', SkillsController.delateSkill);
router.put('/:Id', SkillsController.updateSkill);

export const SkillsRoute = router;
