import * as express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  const items = req.body;
  const { length } = items;

  if (!items || length < 1) res.status(400).send({ msg: 'no items' });

  res.status(200).send(items[Math.floor(Math.random() * length)]);
});

export = router;
