import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import SuperJSON from 'superjson';
import { initTRPC } from '@trpc/server';

export const createContext = (opts: CreateNextContextOptions) => ({
  req: opts.req,
  res: opts.res,
});

const t = initTRPC.context<typeof createContext>().create({
  transformer: SuperJSON,
  errorFormatter: ({ shape }) => shape,
});

export const router = t.router;

export const publicProcedure = t.procedure;
