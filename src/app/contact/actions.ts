'use server';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';
import nodemailer from 'nodemailer';
import { z } from 'zod';

import { env } from '~/env.js';
import { validateCaptchaResponse } from '~/lib/validate-captcha-response';

const schema = z.object({
  email: z.email(),
  message: z.string(),
  name: z.string(),
  token: z.string(),
});

type Data = z.infer<typeof schema>;

export default async function sendEmail(formData: Data) {
  const { data, success } = schema.safeParse(formData);
  if (!success) throw new Error('Invalid form data');

  const isHuman = await validateCaptchaResponse(data.token);
  if (!isHuman) throw new Error('Captcha validation failed');

  const ratelimit = new Ratelimit({
    analytics: true,
    limiter: Ratelimit.slidingWindow(3, '1 m'),
    prefix: '@upstash/ratelimit',
    redis: Redis.fromEnv(),
  });

  const ip = (await headers()).get('x-forwarded-for');
  if (!ip) throw new Error('No client IP');

  const result = await ratelimit.limit(ip);
  if (!result.success) throw new Error('Too many requests');

  try {
    const transporter = nodemailer.createTransport({
      auth: {
        pass: env.NODEMAILER_PASS,
        user: env.NODEMAILER_USER,
      },
      host: env.NODEMAILER_HOST,
      port: Number(env.NODEMAILER_PORT),
      secure: true,
    });

    await transporter.sendMail({
      from: 'Message notification - noreply<noreply@znagy.hu>',
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
      replyTo: data.email,
      subject: `New message from ${data.name} (${data.email})`,
      to: env.NODEMAILER_TO_EMAIL,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
