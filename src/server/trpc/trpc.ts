import type { Context } from './context';
import SuperJSON from 'superjson';
import { initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter: ({ shape }) => shape,
});

export const router = t.router;

export const publicProcedure = t.procedure;
