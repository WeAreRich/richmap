import Axios from 'axios';
import {Logger} from '../Logger';

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';


export const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  PUT: 'PUT'
};

export class HttpService {
  _instance = Axios.create({
    baseURL: 'http://112.74.49.28:3000'
  });
  _TAG = 'HttpService';

  async get(path, params) {
    try {
      let res = await this._instance.get(path, {
        params: params
      });
      Logger.info(this._TAG, '请求得到', res);
      if (res.status !== 200) {
        Logger.error(this._TAG, `请求错误，错误码：${res.status}`);
        throw new Error(`请求错误码: ${res.status}`);
      }
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async post(path, params) {
    try {
      let res = await this._instance.post(path, params);
      if (res.status !== 200) {
        Logger.error(this._TAG, `请求错误，错误码：${res.status}`);
        throw new Error(`请求错误码: ${res.status}`);
      }
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}

const http = new HttpService();
export default http;
