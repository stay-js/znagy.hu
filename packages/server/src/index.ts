import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

const emailRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: 'You are being rate limited',
});

app.use((req, res, next) => {
  console.log(req.method + ' : ' + req.url);
  console.log('body: ' + req.body);

  next();
});

app.get('/', (req, res) => {
  res.status(200).send({ message: 'stay API' });
});

import emailRoute from './routes/send-email';
import locationRoute from './routes/location';
import ipRoute from './routes/ip';
import rngRoute from './routes/rng';
import rtpRoute from './routes/rtp';

app.use('/send-email', emailRequestLimiter, emailRoute);
app.use('/location', locationRoute);
app.use('/ip', ipRoute);
app.use('/rng', rngRoute);
app.use('/rtp', rtpRoute);

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
