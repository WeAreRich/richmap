import http from '../HttpService';

// export interface MapSourceService {
//   getByName(name);
//   getByNameAndYear(name, year);
// }

export class MapSourceServiceImpl {
  getByName(name) {
    return http.get('/map', {name});
  }

  async getByNameAndYear(name, year) {
    return http.get('/map/year', {name, year});
  }

}
