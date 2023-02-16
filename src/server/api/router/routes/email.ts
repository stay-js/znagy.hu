import { TRPCError } from '@trpc/server';
import nodemailer from 'nodemailer';
import { validateCaptchaResponse } from '@utils/validateCaptchaResponse';
import { FormSchema } from '@components/Form';
import { router, publicProcedure } from '../../trpc';
import { env } from 'src/env.mjs';

const transporter = nodemailer.createTransport({
  host: env.NODEMAILER_HOST,
  port: Number(env.NODEMAILER_PORT),
  secure: true,
  auth: {
    user: env.NODEMAILER_USER,
    pass: env.NODEMAILER_PASS,
  },
});

export const emailRouter = router({
  send: publicProcedure
    .input(FormSchema)
    .mutation(async ({ input: { name, email, message, token } }) => {
      const isHuman = await validateCaptchaResponse(token);

      if (!isHuman) {
        throw new TRPCError({ code: 'BAD_REQUEST', cause: 'Captcha validation failed' });
      }

      try {
        return await transporter.sendMail({
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
      } catch (error) {
        console.error(error);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', cause: error });
      }
    }),
});
