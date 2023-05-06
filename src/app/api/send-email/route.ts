import nodemailer from 'nodemailer';
import { validateCaptchaResponse } from '@utils/validateCaptchaResponse';
import { z } from 'zod';
import { env } from 'src/env.mjs';

export const Schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  token: z.string(),
});

export const POST = async (request: Request) => {
  if (env.NODE_ENV === 'production' && request.headers.get('origin') !== 'https://znagy.hu') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const body = (await request.json()) as unknown;

  if (!body) return new Response(JSON.stringify({ error: 'No request body' }), { status: 400 });

  const result = Schema.safeParse(body);

  if (!result.success) {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  const { token, email, name, message } = result.data;

  const isHuman = await validateCaptchaResponse(token);

  if (!isHuman) {
    return new Response(JSON.stringify({ error: 'Captcha validation failed' }), { status: 400 });
  }

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
      from: 'stay Mail - noreply<noreply@znagy.hu>',
      to: 'znagy@znagy.hu',
      replyTo: email,
      subject: 'New Message',
      html: `
				<div>
				Name: <b>${name}</b>
				<br />
				E-mail: <b>${email}</b>
				</div>
				<br />
		
				<div>
				Message:
				<br />
				${message.replace(/\n/g, '<br />')}
				</div>
				`,
    });

    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
