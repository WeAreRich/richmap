import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.render('index', {title: 'Express'});
});

app.listen(3000, 'localhost', () => {
  console.log(`express服务已经启动:localhost:3000`);
});
