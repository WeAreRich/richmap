import { Logger } from '@/services/Logger';

export default class Nomination {
  async search(keyword: string): Promise<any> {
    const url = `http://nominatim.openstreetmap.org/search?format=json&q=${decodeURIComponent(keyword)}`;
    Logger.info(this, `start to fetch ${url}`);
    try {
      let res = await fetch(url);
      res = await res.json();
      Logger.info(this, 'fetch success', res);
      return res;
    } catch (e) {
      Logger.error(this, 'fetch error', e);
      throw e;
    }
  }
}
