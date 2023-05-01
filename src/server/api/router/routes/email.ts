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
  send: publicProcedure.input(FormSchema).mutation(async ({ input }) => {
    const isHuman = await validateCaptchaResponse(input.token);

    if (!isHuman) {
      throw new TRPCError({ code: 'BAD_REQUEST', cause: 'Captcha validation failed' });
    }

    try {
      await transporter.sendMail({
        from: 'stay Mail - noreply<noreply@znagy.hu>',
        to: 'znagy@znagy.hu',
        replyTo: input.email,
        subject: 'New Message',
        html: `
          <div>
          Name: <b>${input.name}</b>
          <br />
          E-mail: <b>${input.email}</b>
          </div>
          <br />
      
          <div>
          Message:
          <br />
          ${input.message.replace(/\n/g, '<br />')}
          </div>
          `,
      });

      return { message: 'Success' };
    } catch (error) {
      console.error(error);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', cause: error });
    }
  }),
});
