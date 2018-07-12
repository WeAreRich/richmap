//底层sql 实现
import { BasicSqlService } from "../basicsqlservice";
import { God } from "../basesql/God";
import { SqlStatement } from "../SqlStatement";
import { BaseOrmClass } from "../../../orm/BaseOrmClass";

export class BasicSql implements BasicSqlService {
  createTable(name: string): void {
    God.godBasic(SqlStatement.CREATE + name + SqlStatement.TABLE_COLUMNS);
  }

  dropTable(name: string): void {
    God.godBasic(SqlStatement.DROP + name);
  }

  selectAll(name: string): BaseOrmClass[] {
    return God.godBasic(SqlStatement.SELECT + name);
  }

  selectByDate(name: string, startDate: Date, endDate: Date): BaseOrmClass[] {
    return God.godBasic(SqlStatement.SELECT + name + SqlStatement.WHERE_DATE(startDate, endDate));
  }

  selectByPosition(name: string, positions: string[]): BaseOrmClass[] {
    return God.godBasic(SqlStatement.SELECT + name + SqlStatement.WHERE_POSITION(positions));
  }

}