import { MapSourceService } from '@/services/api/map-source/MapSourceService';
import { MapboxSource } from '@/types/mapbox-source';
import { tileSets } from '@/constants/mapbox';

const source = new MapboxSource(1, 'raster', 'hubeiGDP', 'mapbox://wenxiangdong.aa00vskv', 2010);

export class MapSourceServiceMock implements MapSourceService{
  async getByName(name: string): Promise<MapboxSource[]> {
    let res = [];
    res.push({
      ID: 1,
      type: 'raster',
      name: 'name',
      url: tileSets.hubeiDEM,
      year: 2010
    });
    res.push({
      ID: 2,
      type: 'raster',
      name: 'name',
      url: tileSets.hubeiGDP,
      year: 2011
    });
    res.push({
      ID: 3,
      type: 'raster',
      name: 'name',
      url: tileSets.hubeiSlope,
      year: 2012
    });
    res.push({
      ID: 4,
      type: 'raster',
      name: 'name',
      url: tileSets.hubieNightLight,
      year: 2013
    });
    return res;
  }

  async getByNameAndYear(name: string, year: number): Promise<MapboxSource[]> {
    let res = [
      source
    ];
    return res;
  }

}