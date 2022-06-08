import * as express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  const { min, max }: any = req.query;

  if (!min) res.status(400).send({ msg: 'No MIN value' });
  if (!max) res.status(400).send({ msg: 'No MAX value' });

  if (isNaN(min)) res.status(400).send({ msg: 'MIN is not a number' });
  if (isNaN(max)) res.status(400).send({ msg: 'MAX is not a number' });

  let number = Math.floor(Math.random() * (max - min + 1) + min);

  if (number < min) number = min;
  if (number > max) number = max;

  res.status(200).send(
    `Number: ${number}
      <br />
      <a href="https://api.stayy.xyz/rng?min=${min}&max=${max}">Generate New Number</a>
      `,
  );
});

export = router;
