import { SearchResult } from '@/models/SearchResult';
import http from '@/services/api/HttpService';

export interface SearchService {
  search(kw: string): Promise<SearchResult>;
}

export class SearchServiceImpl implements SearchService {
  async search(kw: string): Promise<SearchResult> {
    const res = await http.fetch({
      path: 'search',
    });
    return res.response;
  }

}