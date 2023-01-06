import { router } from '../trpc';
import { emailRouter } from './routes/email';

export const appRouter = router({
  email: emailRouter,
});

export type AppRouter = typeof appRouter;
