import * as express from 'express';
import requestIp from 'request-ip';

let router = express.Router();

router.get('/', (req, res) => {
  const ip = requestIp.getClientIp(req);
  if (!ip) return res.send(400).send("Can't Fetch IP");

  res.status(200).send({ ip: ip });
});

export = router;
