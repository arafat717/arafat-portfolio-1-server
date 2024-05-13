import { Request, Response } from 'express';
import { BlogService } from './Blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = req.body.blog;
    const result = await BlogService.createBlogIntoDb(blog);

    res.status(200).json({
      success: true,
      message: 'Blog added Successfuly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getallBlog = async (req: Request, res: Response) => {
  try {
    const result = await BlogService.getAllBlogIntoDb();

    res.status(200).json({
      success: true,
      message: 'Blogs are retrived Successfuly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    const results = await BlogService.getSingleBlogFromDb(Id);

    res.status(200).json({
      success: true,
      message: 'Single data is here',
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const BlogController = {
  createBlog,
  getallBlog,
  getSingleBlog,
};
