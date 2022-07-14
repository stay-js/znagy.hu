const { z } = require('zod');

const envSchema = z.object({
  NODEMAILER_USER: z.string().email(),
  NODEMAILER_PASS: z.string(),
  NODEMAILER_RECIEVER: z.string().email(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

module.exports.envSchema = envSchema;
