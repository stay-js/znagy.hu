import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,

    NODEMAILER_HOST: process.env.NODEMAILER_HOST,
    NODEMAILER_PASS: process.env.NODEMAILER_PASS,
    NODEMAILER_PORT: process.env.NODEMAILER_PORT,
    NODEMAILER_TO_EMAIL: process.env.NODEMAILER_TO_EMAIL,
    NODEMAILER_USER: process.env.NODEMAILER_USER,

    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  },
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),

    NODEMAILER_HOST: z.string().min(1),
    NODEMAILER_PASS: z.string().min(1),
    NODEMAILER_PORT: z
      .string()
      .min(1)
      .refine((value) => !isNaN(Number(value))),
    NODEMAILER_TO_EMAIL: z.email(),
    NODEMAILER_USER: z.string().min(1),

    RECAPTCHA_SECRET_KEY: z.string().min(1),
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
