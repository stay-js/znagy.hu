import * as express from 'express';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const router = express.Router();

const requestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 2,
  message: { msg: 'You are being rate limited' },
});

const transporter = nodemailer.createTransport({
  host: 'smtp.rackhost.hu',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

router.post('/', requestLimiter, (req, res) => {
  if (req.headers.origin !== 'https://znagy.hu') return res.sendStatus(403);

  const { name, email, msg } = req.body;
  if (!name || !email || !msg) return res.sendStatus(400);

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
});

export = router;
