import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.rackhost.hu',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers.origin !== 'https://znagy.hu') {
    res.status(403).send({ message: 'Forbidden' });
    return;
  }

  const { name, email, msg } = req.body;
  if (!name || !email || !msg) {
    res.status(400).send({ message: 'Bad Request' });
    return;
  }

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
      ${msg.replace(/\n/g, '<br />')}
      </div>
      `,
  };

  transporter
    .sendMail(mailOptions)
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(502).send(error);
    });
};
