import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log(process.env.NODEMAILER_USER);

  const { name, email, msg } = req.body;
  const message = msg.replace(/\n/g, '<br />');

  const mailOptions = {
    from: `stay Mail - noreply<${process.env.NODEMAILER_USER}>`,
    to: process.env.NODEMAILER_RECIEVER,
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
    ${message}
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, results) => {
    if (!results || error) {
      res.status(503).send('Something went wrong!' + error);
      console.log('Something went wrong!' + error);
    } else {
      res.status(200).send(results.response);
      console.log(results.response);
    }
  });
};

export default handler;
