import {SearchServiceImpl} from './search/SearchService'
import {SearchServiceMock} from './search/SearchServiceMock'
import {MapSourceServiceImpl} from './map-source/MapSourceService'
import {MapSourceServiceMock} from './map-source/MapSourceServiceMock'

class ApiProvider {
  isMock = false;

  searchService = undefined;
  mapSourceService = undefined;

  constructor() {
    if (this.isMock) {
      this.searchService = new SearchServiceMock();
      this.mapSourceService = new MapSourceServiceMock();
    } else {
      this.searchService = new SearchServiceImpl();
      this.mapSourceService = new MapSourceServiceImpl();
    }
  }
}

export const api = new ApiProvider();
