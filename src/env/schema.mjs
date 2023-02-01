// @ts-check
import { z } from 'zod';

export const serverSchema = z.object({
  NODEMAILER_HOST: z.string(),
  NODEMAILER_PORT: z.string(),
  NODEMAILER_USER: z.string().email(),
  NODEMAILER_PASS: z.string(),
  NODEMAILER_RECIEVER: z.string().email(),
  RECAPTCHA_SECRET_KEY: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

export const clientSchema = z.object({
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string(),
});

export const clientEnv = {
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
};
