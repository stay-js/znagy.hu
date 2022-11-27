import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

type CreateContextOptions = Record<string, never>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createContextInner = async (opts: CreateContextOptions) => {
  return {};
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createContext = async (opts: CreateNextContextOptions) => {
  return await createContextInner({});
};

export type Context = inferAsyncReturnType<typeof createContext>;
