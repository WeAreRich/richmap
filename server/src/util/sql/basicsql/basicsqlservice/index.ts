import { BaseOrmClass } from "../../../orm/BaseOrmClass";

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

  /**
   * select all values from a table
   * @param {string} name
   * @returns {BaseOrmClass[]}
   */
  selectAll(name: string): BaseOrmClass[];

  /**
   * select data by their date from a table
   * @param {string} name
   * @param {Date} startDate
   * @param {Date} endDate
   * @returns {BaseOrmClass[]}
   */
  selectByDate(name: string, startDate: Date, endDate: Date): BaseOrmClass[];

  /**
   * select data by their position
   * @param {string} name
   * @param {string[]} positions
   * @returns {BaseOrmClass[]}
   */
  selectByPosition(name: string, positions: string[]): BaseOrmClass[];
}