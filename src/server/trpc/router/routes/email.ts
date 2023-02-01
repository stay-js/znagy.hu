import { TRPCError } from '@trpc/server';
import nodemailer from 'nodemailer';
import { validateCaptchaResponse } from '@utils/validateCaptchaResponse';
import { FormSchema } from '@components/Form';
import { router, publicProcedure } from '../../trpc';
import { env } from '@env/server.mjs';

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
        throw new TRPCError({ code: 'BAD_REQUEST', message: 'Captcha validation failed' });
      }

      const mailOptions = {
        from: `stay Mail - noreply<${env.NODEMAILER_USER}>`,
        to: env.NODEMAILER_RECIEVER,
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
      };

      try {
        const status = await transporter.sendMail(mailOptions);
        return status;
      } catch (error) {
        console.error(error);
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', cause: error });
      }
    }),
});
