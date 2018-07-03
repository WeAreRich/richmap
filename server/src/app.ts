import * as express from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
// import { Photo } from "./entity/Photo";
import { ConnectionOptions } from "typeorm/connection/ConnectionOptions";

const app = express();


const options = {
  driver: {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test"
  },
  entities: [
    Photo
  ],
  autoSchemaSync: true,
};

//
// createConnection(options).then(connection => {
//   // 这里可以写实体操作相关的代码
// }).catch(error => console.log(error));

app.listen(3000, 'localhost', () => {
  console.log(`express服务已经启动:localhost:3000`);
});