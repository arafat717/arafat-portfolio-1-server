import { TBlogs } from './Blog.interface';
import { Blogs } from './Blog.model';

const createBlogIntoDb = async (Blog: TBlogs) => {
  const result = await Blogs.create(Blog);
  return result;
};

const getAllBlogIntoDb = async () => {
  const result = await Blogs.find();
  return result;
};

export const BlogService = {
  createBlogIntoDb,
  getAllBlogIntoDb,
};
