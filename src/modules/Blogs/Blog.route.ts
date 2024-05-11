import express from 'express';
import { BlogController } from './Blog.controller';

const router = express.Router();

router.post('/create-blog', BlogController.createBlog);
router.get('/', BlogController.getallBlog);

export const BlogRoute = router;
