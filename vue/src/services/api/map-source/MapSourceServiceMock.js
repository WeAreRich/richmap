import {tileSets} from '../../../constants/mapbox.js';
export class MapSourceServiceMock {
  async getByName(name) {
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

  async getByNameAndYear(name, year) {
    let res = [
      {
        ID: 4,
        type: 'raster',
        name: 'name',
        url: tileSets.hubieNightLight,
        year: 2013
      }
    ];
    return res;
  }

}
