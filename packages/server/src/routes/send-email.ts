import * as express from 'express';
import nodemailer from 'nodemailer';

let router = express.Router();

const transporter = nodemailer.createTransport({
  host: 'smtp.rackhost.hu',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

router.post('/', (req, res) => {
  if (req.headers.origin !== 'https://stayy.xyz') return res.sendStatus(403);

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
      console.log(error);
      res.status(502).send(error);
    });
});

export = router;
