
import { createConnection,Connection } from "typeorm";
export class TypeOrmConnection {
  private static isConnected: boolean = false;
  private static connection:Promise<Connection>;

  public static getConnection():Promise<Connection>{
    if (this.connection != undefined) {
      return this.connection;
    } else {
      this.connection = createConnection();
      return this.connection;
    }
  }
}
