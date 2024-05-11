import { Schema, model } from 'mongoose';
import { TBlogs } from './Blog.interface';

const BlogsSchema = new Schema<TBlogs>({
  imageUrl: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  title: { type: String, required: true },
});

export const Blogs = model<TBlogs>('Blogs', BlogsSchema);
