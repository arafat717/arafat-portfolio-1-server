import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import { SkillsRoute } from './modules/Skills/Skills.routes';
import { BlogRoute } from './modules/Blogs/Blog.route';
import { ProjectRoute } from './modules/Projects/Project.route';

const app: Application = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
);
// https://arafat-portfolio.vercel.app
// http://localhost:5173/

// parsers
app.use(express.json());
app.use(cookieParser());

// application routes
// Make sure to define CORS middleware before routes
app.use('/api/v1', router);
app.use('/api/v1/skill', SkillsRoute);
app.use('/api/v1/blog', BlogRoute);
app.use('/api/v1/project', ProjectRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Arafat Hossen Joni Api !');
});

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
