import superjson from 'superjson';
import { createRouter } from './context';

import emailRouter from './email';

export const appRouter = createRouter().transformer(superjson).merge('email.', emailRouter);

export type AppRouter = typeof appRouter;
