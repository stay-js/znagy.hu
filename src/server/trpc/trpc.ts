import type { Context } from './context';
import superjson from 'superjson';
import { initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter: ({ shape }) => shape,
});

export const router = t.router;

export const publicProcedure = t.procedure;
