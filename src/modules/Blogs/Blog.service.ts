/* eslint-disable @typescript-eslint/no-explicit-any */
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

const deleteUserFromDB = async (id: string) => {
  const result = await Blogs.findOneAndDelete({ _id: id });
  return result;
};

const updateBlogFromDB = async (id: string, userData: any) => {
  const result = await Blogs.findOneAndUpdate({ _id: id }, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const BlogService = {
  createBlogIntoDb,
  getAllBlogIntoDb,
  getSingleBlogFromDb,
  deleteUserFromDB,
  updateBlogFromDB,
};
