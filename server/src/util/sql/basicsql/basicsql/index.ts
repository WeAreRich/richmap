//底层sql 实现
import { BasicSqlService } from "../basicsqlservice";
import { God } from "../basesql/God";
import { SqlStatement } from "../SqlStatement";

export class BasicSql implements BasicSqlService {
  createTable(name: string): void {
    God.godBasic(SqlStatement.CRAETE + name);
  }

  dropTable(name: string): void {
    God.godBasic(SqlStatement.DROP + name);
  }
}