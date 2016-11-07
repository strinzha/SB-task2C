import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const a = Number(req.query.a) || 0;
  const b = Number(req.query.b) || 0;
  const summ = a + b;
  res.send(summ.toString());
});

app.listen(3000, () => {});
