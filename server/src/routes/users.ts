import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('respond with a resource');
});
