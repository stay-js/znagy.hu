'use server';

import { headers } from 'next/headers';
import nodemailer from 'nodemailer';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { z } from 'zod';
import { validateCaptchaResponse } from '~/lib/validate-captcha-response';
import { env } from '~/env.js';

const schema = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string(),
  token: z.string(),
});

type Data = z.infer<typeof schema>;

export default async function sendEmail(formData: Data) {
  const { data, success } = schema.safeParse(formData);
  if (!success) throw new Error('Invalid form data');

  const isHuman = await validateCaptchaResponse(data.token);
  if (!isHuman) throw new Error('Captcha validation failed');

  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, '1 m'),
    analytics: true,
    prefix: '@upstash/ratelimit',
  });

  const ip = (await headers()).get('x-forwarded-for');
  if (!ip) throw new Error('No client IP');

  const result = await ratelimit.limit(ip);
  if (!result.success) throw new Error('Too many requests');

  try {
    const transporter = nodemailer.createTransport({
      host: env.NODEMAILER_HOST,
      port: Number(env.NODEMAILER_PORT),
      secure: true,
      auth: {
        user: env.NODEMAILER_USER,
        pass: env.NODEMAILER_PASS,
      },
    });

    await transporter.sendMail({
      from: 'Message notification - noreply<noreply@znagy.hu>',
      to: env.NODEMAILER_TO_EMAIL,
      replyTo: data.email,
      subject: `New message from ${data.name} (${data.email})`,
      html: `
				<div>
        Name: <b>${data.name}</b>
				<br />
				Email: <b>${data.email}</b>
				</div>
				<br />
		
				<div>
				Message:
				<br />
				${data.message.replace(/\n/g, '<br />')}
				</div>
				`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
