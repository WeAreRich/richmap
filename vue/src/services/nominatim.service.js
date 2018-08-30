import { Logger } from './Logger';
import http from './api/HttpService';

export default class Nomination {
  _TAG = 'Nomination.js';

  /**
   * 搜索地名
   * @param keyword
   * @return {Promise<*>}
   */
  async search(keyword) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${decodeURIComponent(keyword)}&accept-language=zh`;
    try {
      let res = await http.get(url);
      Logger.info(this._TAG, '地名搜索服务成功', res);
      return res;
    } catch (e) {
      Logger.error(this._TAG, '地名搜索服务错误', e);
      throw e;
    }
  }
}
