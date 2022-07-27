// @ts-check
import { z } from 'zod';

export const serverSchema = z.object({
  NODEMAILER_USER: z.string().email(),
  NODEMAILER_PASS: z.string(),
  NODEMAILER_RECIEVER: z.string().email(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

export const clientSchema = z.object({
  NEXT_PUBLIC_VERCEL_URL: z.string(),
});

export const clientEnv = {
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
};
