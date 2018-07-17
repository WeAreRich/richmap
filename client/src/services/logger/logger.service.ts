import { Injectable } from '@angular/core';
import {t} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public error(tag, ...content): void {
    if (console.error) {
      console.error(`Time: ${new Date().toLocaleTimeString()}`);
      for (let item of content) {
        console.error(item);
      }
    } else {
      this.log(tag, ...content);
    }
  }

  public info(tag, ...content): void {
    if (console.info) {
      console.info(`Time: ${new Date().toLocaleTimeString()}`);
      for (let item of content) {
        console.info(item);
      }
    } else {
      this.log(tag, ...content);
    }
  }

  public log(tag, ...content): void {
    console.log(`Time: ${new Date().toLocaleTimeString()}`);
    for (let item of content) {
      console.log(item);
    }
  }
}
