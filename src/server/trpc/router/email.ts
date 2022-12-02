import { TRPCError } from '@trpc/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { env } from '@env/server.mjs';
import { router, publicProcedure } from '../trpc';

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
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
      }),
    )
    .mutation(async ({ input: { name, email, message } }) => {
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
