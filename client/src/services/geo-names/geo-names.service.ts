/*
使用 GeoNames 的api，对于英语的查询结果较好，中文查询不好
 */
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LoggerService} from '../logger/logger.service';
import {HttpClient, HttpParams} from '@angular/common/http';

const BASE_URL = 'http://api.geonames.org';

@Injectable({
  providedIn: 'root'
})
export class GeoNamesService {
  TAG = 'GeoNamesService';
  USERNAME = 'wenxiangdong';
  constructor(
    private logger: LoggerService,
    private http: HttpClient) { }

  search (query: string): Observable<any> {
    this.logger.info(this.TAG, `call search with params\nquery: ${query}, name: ${name}`);
    const url = BASE_URL + '/searchJSON';
    let params = new HttpParams()
      .set('q', decodeURIComponent(query))
      .set('username', this.USERNAME);
    this.logger.info(this.TAG, 'start to query...', params);
    return this.http.get(url, {
      params: params
    });
  }
}
