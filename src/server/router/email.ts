import { TRPCError } from '@trpc/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { env } from '@env/server.mjs';
import { createRouter } from './context';

const transporter = nodemailer.createTransport({
  host: env.NODEMAILER_HOST,
  port: env.NODEMAILER_PORT,
  secure: true,
  auth: {
    user: env.NODEMAILER_USER,
    pass: env.NODEMAILER_PASS,
  },
});

const emailRouter = createRouter().mutation('send', {
  input: z.object({
    name: z.string(),
    email: z.string().email(),
    msg: z.string(),
  }),
  resolve: async ({ input: { name, email, msg } }) => {
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
        ${msg.replace(/\n/g, '<br />')}
        </div>
        `,
    };

    try {
      const status = await transporter.sendMail(mailOptions);
      return status;
    } catch (error) {
      console.error(error);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', originalError: error });
    }
  },
});

export default emailRouter;
