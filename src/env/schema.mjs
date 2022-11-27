// @ts-check
import { z } from 'zod';

export const serverSchema = z.object({
  NODEMAILER_HOST: z.string(),
  NODEMAILER_PORT: z.string(),
  NODEMAILER_USER: z.string().email(),
  NODEMAILER_PASS: z.string(),
  NODEMAILER_RECIEVER: z.string().email(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

export const clientSchema = z.object({});

export const clientEnv = {};
