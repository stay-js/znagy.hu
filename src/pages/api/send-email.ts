import type { NextApiHandler } from 'next';
import nodemailer from 'nodemailer';
import { validateCaptchaResponse } from '@utils/validateCaptchaResponse';
import { FormSchema } from '@components/Form';
import { env } from 'src/env.mjs';
import { z } from 'zod';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (env.NODE_ENV === 'production' && req.headers.origin !== 'https://znagy.hu') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (!req.body) return res.status(400).json({ error: 'No request body' });

  const result = FormSchema.extend({ token: z.string() }).safeParse(JSON.parse(req.body as string));

  if (!result.success) return res.status(400).json({ error: 'Invalid request body' });

  const { token, email, name, message } = result.data;

  const isHuman = await validateCaptchaResponse(token);

  if (!isHuman) return res.status(400).json({ error: 'Captcha validation failed' });

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

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export default handler;
