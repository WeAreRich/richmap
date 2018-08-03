import { SearchService } from '@/services/api/search/SearchService';
import { SearchResult } from '@/models/SearchResult';

export class SearchServiceMock implements SearchService {
  async search(kw: string): Promise<SearchResult> {
    return undefined;
  }

}