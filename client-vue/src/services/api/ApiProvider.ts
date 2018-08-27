import { DataAnalysisServiceMock } from '@/services/api/dataanalysis/DataAnalysisServiceMock';
import { DataAnalysisService, DataAnalysisServiceImpl } from '@/services/api/dataanalysis/DataAnalysisService';
import { SearchService, SearchServiceImpl } from '@/services/api/search/SearchService';
import { SearchServiceMock } from '@/services/api/search/SearchServiceMock';
import { MapSourceService, MapSourceServiceImpl } from '@/services/api/map-source/MapSourceService';
import { MapSourceServiceMock } from '@/services/api/map-source/MapSourceServiceMock';

class ApiProvider {
  isMock: boolean = true;

  dataAnalysisService: DataAnalysisService;
  searchService: SearchService;
  mapSourceService: MapSourceService;

  constructor() {
    if (this.isMock) {
      this.dataAnalysisService = new DataAnalysisServiceMock();
      this.searchService = new SearchServiceMock();
      this.mapSourceService = new MapSourceServiceMock();
    } else {
      this.dataAnalysisService = new DataAnalysisServiceImpl();
      this.searchService = new SearchServiceImpl();
      this.mapSourceService = new MapSourceServiceImpl();
    }
  }
}

export const api = new ApiProvider();