export interface BasicSqlService {
  /**
   * create a table
   * @param {string} name table name
   */
  createTable(name: string): void;

  /**
   * drop a table
   * @param {string} name table name
   */
  dropTable(name: string): void;
}