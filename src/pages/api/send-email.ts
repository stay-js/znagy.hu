import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
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
  await NextCors(req, res, {
    origin: 'https://stayy.xyz',
    methods: ['POST'],
    credentials: true,
    optionsSuccessStatus: 200,
  });

  if (req.headers.origin !== 'https://stayy.xyz')
    return res.status(403).send('403 Forbidden');

  if (req.method !== 'POST')
    return res.status(405).send('405 Method Not Allowed');

  const { name, email, msg } = req.body;

  if (!name || !email || !msg) return res.status(400).send('400 Bad Request');

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
      console.log(error);
      res.status(502).send(error);
    });
};

export default handler;
