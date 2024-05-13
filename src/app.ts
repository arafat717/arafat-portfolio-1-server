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
    origin: ['https://arafat-portfolio.vercel.app'],
    credentials: true,
  }),
);

//parsers
app.use(express.json());
app.use(cookieParser());

// application routes
app.use('/api/v1', router);
app.use('/api/v1/skill', SkillsRoute);
app.use('/api/v1/blog', BlogRoute);
app.use('/api/v1/project', ProjectRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hi Next Level Developer !');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
