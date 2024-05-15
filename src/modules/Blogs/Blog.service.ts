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

const getSingleBlogFromDb = async (id: string) => {
  const result = await Blogs.findOne({ _id: id });
  return result;
};

const deleteUserFromDB = async (id: number) => {
  const result = await Blogs.findOneAndDelete({ _id: id });
  return result;
};

export const BlogService = {
  createBlogIntoDb,
  getAllBlogIntoDb,
  getSingleBlogFromDb,
  deleteUserFromDB,
};
