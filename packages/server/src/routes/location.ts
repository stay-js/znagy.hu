import * as express from 'express';
import requestIp from 'request-ip';
import { lookup } from 'geoip-lite';

let router = express.Router();

router.get('/', (req, res) => {
  const ip = requestIp.getClientIp(req);
  if (!ip) return res.send(400).send({ msg: "Can't Fetch IP" });

  const location = lookup(ip);
  if (!location) return res.send(400).send({ msg: "Can't Fetch Location" });

  res.status(200).send({ ip, location });
});

export = router;
