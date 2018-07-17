export class SqlStatement {
  public static CREATE = "CREATE TABLE ";
  public static TABLE_COLUMNS = " (id INT(32) not null AUTO_INCREMENT, date date, position varchar(50), value varchar(50), primary key(id))";
  public static DROP = "DROP TABLE ";
  public static SELECT = "SELECT * FROM ";

  public static WHERE_DATE(startDate: Date, endDate: Date) {
    return "WHERE date>=" + startDate + " AND date<=" + endDate;
  }

  public static WHERE_POSITION(positions: string[]) {
    let positionStatements: string[] = [];
    for (let i = 0; i < positions.length; i++) {
      positionStatements.push("position=" + positions[i]);
    }
    let queryStatement: string = "WHERE ";
    for (let j = 0; j < positionStatements.length; j++) {
      if (j == positionStatements.length - 1) {
        queryStatement += positionStatements[j];
      } else {
        queryStatement += positionStatements[j] + " OR ";
      }
    }
    return queryStatement;
  }
}