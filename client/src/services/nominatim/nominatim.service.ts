/*
使用 Nominatiom 的api查询地名，对中文支持较好
 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoggerService} from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class NominatimService {

  TAG = 'NominatimService';

  constructor(
    private http: HttpClient,
    private logger: LoggerService) { }

  search(query: string) {
    let url = ' http://nominatim.openstreetmap.org/search';
    let params = new HttpParams()
      .set('format', 'json')
      .set('q', decodeURIComponent(query));
    this.logger.info(this.TAG, url, params);
    return this.http.get(url, {
      params: params
    });
  }
}
