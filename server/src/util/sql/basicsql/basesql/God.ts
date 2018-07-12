import { BaseOrmClass } from "../../../orm/BaseOrmClass";

export class God {
  userName: string;
  databaseName: string;
  password: string;
  static connection: any;

  constructor() {
    this.userName = "root";
    this.databaseName = "richdb";
    this.password = "zhanglingzhe0820";
    this.connect()

    //请自己改成自己本地数据库的用户名、数据库名、密码
  }

  private connect() {
    const mysql = require('mysql');
    God.connection = mysql.createConnection({
      host: 'localhost',
      user: this.userName,
      password: this.password,
      database: this.databaseName
    });

  }

  public static godBasic(content: string): any {

    God.connection.query(content, function (error, results: BaseOrmClass[] | BaseOrmClass, fields) {
      if (error) throw error;

      return results
    })

  }

  public static closeConnection() {
    God.connection.end();
  }

}