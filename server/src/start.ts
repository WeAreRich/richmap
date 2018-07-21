import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { container } from './ioc/ioc';

// load all injectable entities.
// the @provide() annotation will then automatically register them.
import './ioc/loader';
import file from './controller/FIleController';
// start the server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
    app.use(helmet({
        frameguard: {
            action: 'deny'
        }
    }));


  app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
  });

  file(app);
  let express = require('express');
  app.use("/files",express.static("fileDirectory"));
  
});

let app = server.build();

app.listen(80);

console.log('Server started on port 80 :)');
console.log("click http://127.0.0.1:3000");

exports = module.exports = app;