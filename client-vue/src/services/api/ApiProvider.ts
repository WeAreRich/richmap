import { DataAnalysisServiceMock } from '@/services/api/dataanalysis/DataAnalysisServiceMock';
import { DataAnalysisService, DataAnalysisServiceImpl } from '@/services/api/dataanalysis/DataAnalysisService';
import { SearchService, SearchServiceImpl } from '@/services/api/search/SearchService';
import { SearchServiceMock } from '@/services/api/search/SearchServiceMock';

class ApiProvider {
  isMock: boolean = false;

  dataAnalysisService: DataAnalysisService;
  searchService: SearchService;

  constructor() {
    if (this.isMock) {
      this.dataAnalysisService = new DataAnalysisServiceMock();
      this.searchService = new SearchServiceMock();
    } else {
      this.dataAnalysisService = new DataAnalysisServiceImpl();
      this.searchService = new SearchServiceImpl();
    }
  }
}

export const api = new ApiProvider();