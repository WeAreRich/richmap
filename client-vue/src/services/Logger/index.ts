/*
日志类
 */
export class Logger {
  private instance: Logger;

  static info(tag, ...contents): void {
    let time = new Date().toLocaleTimeString();
    if (console.info) {
      console.info(`At ${time} in ${tag}`);
      for (let item of contents) {
        console.info(item);
      }
    } else {
      Logger.log(tag, ...contents);
    }
  }

  static error(tag, ...contents): void {
    let time = new Date().toLocaleTimeString();
    if (console.error) {
      console.error(`At ${time} in ${tag}`);
      for (let item of contents) {
        console.error(item);
      }
    } else {
      Logger.log(tag, ...contents);
    }
  }

  static log(tag, ...contents): void {
    let time = new Date().toLocaleTimeString();
    console.log(`At ${time} in ${tag}`);
    for (let item of contents) {
      console.log(item);
    }
  }
}
