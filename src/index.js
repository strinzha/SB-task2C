import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/task2C', (req, res) => {
  const re = /^@?(https:|http:)?(\/\/)?(www.)?(vk.com\/|twitter.com\/|telegram.me\/|github.com\/)?(\w+)/;
  const username = req.query.username;
  const matches = username.match(re);
  res.send(`@${matches[matches.length - 1]}`);
});

app.listen(3000, () => {});
