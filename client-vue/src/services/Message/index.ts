export class Message {
  private _vm: any;
  constructor(vm: any) {
    this._vm = vm;
  }
  info(msg) {
    this._vm.$Message.info(msg);
  }
  error(msg) {
    this._vm.$Message.error(msg);
  }
}