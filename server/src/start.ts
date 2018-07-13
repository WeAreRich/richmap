import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { container } from './ioc/ioc';

// load all injectable entities.
// the @provide() annotation will then automatically register them.
import './ioc/loader';

// start the server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(helmet());
});

let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');

exports = module.exports = app;

// createConnection().then(async connection => {

//   console.log("dataBase init successfully");
//   const user = new User();
//   user.firstName = "Timber";
//   user.lastName = "Saw";
//   user.age = 25;
//   await connection.manager.save(user);
//   console.log("Saved a new user with id: " + user.id);

//   console.log("Loading users from the database...");
//   const users = await connection.manager.find(User);
//   console.log("Loaded users: ", users);

//   const server = Server;
//   const debug = require("debug")("express:server");
//   const http = require("http");

//   //create http server
//   let httpPort = normalizePort(process.env.PORT || 8080);
//   const app = server.bootstrap().app;
//   app.set("port", httpPort);
//   const httpServer = http.createServer(app);

//   //listen on provided ports
//   httpServer.listen(httpPort);

// //add error handler
//   httpServer.on("error", onError);

// //start listening on port
//   httpServer.on("listening", onListening);

//   /**
//    * Normalize a port into a number, string, or false.
//    */
//   function normalizePort(val) {
//     const port = parseInt(val, 10);

//     if (isNaN(port)) {
//       // named pipe
//       return val;
//     }

//     if (port >= 0) {
//       // port number
//       return port;
//     }

//     return false;
//   }

//   /**
//    * Event listener for HTTP server "error" event.
//    */
//   function onError(error) {
//     if (error.syscall !== "listen") {
//       throw error;
//     }

//     const bind = typeof httpPort === "string"
//       ? "Pipe " + httpPort
//       : "Port " + httpPort;

//     // handle specific listen errors with friendly messages
//     switch (error.code) {
//       case "EACCES":
//         console.error(bind + " requires elevated privileges");
//         process.exit(1);
//         break;
//       case "EADDRINUSE":
//         console.error(bind + " is already in use");
//         process.exit(1);
//         break;
//       default:
//         throw error;
//     }
//   }

//   /**
//    * Event listener for HTTP server "listening" event.
//    */
//   function onListening() {
//     let addr = httpServer.address();
//     const bind = typeof addr === "string"
//       ? "pipe " + addr
//       : "port " + addr.port;
//     console.log("The program start at http://127.0.0.1:" + addr.port)
//     debug("Listening on " + bind);
//   }
// }).catch(error => console.log(error));

