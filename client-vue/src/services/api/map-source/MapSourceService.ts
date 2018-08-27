import { MapboxSource } from '@/types/mapbox-source';
import http from '@/services/api/HttpService';

export interface MapSourceService {
  getByName(name: string): Promise<MapboxSource[]>;
  getByNameAndYear(name: string, year: number): Promise<MapboxSource[]>;
}

export class MapSourceServiceImpl implements MapSourceService{
  async getByName(name: string): Promise<MapboxSource[]> {
    let res = await http.fetch({
      path: 'map',
      queryParams: {name: name}
    });
    return res.response;
  }

  async getByNameAndYear(name: string, year: number): Promise<MapboxSource[]> {
    console.log('MapSourceApi', name, year);
    let res = await http.fetch({
      path: 'map/year',
      queryParams: {name, year}
    });
    return res.response;
  }

}