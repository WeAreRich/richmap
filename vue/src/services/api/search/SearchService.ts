import { SearchResult } from '@/models/SearchResult';
import http from '@/services/api/HttpService';

export interface SearchService {
  searchOne(kw: string): Promise<SearchResult[]>;

  search(kw: string): Promise<SearchResult[]>;
}

export class SearchServiceImpl implements SearchService {
  async searchOne(kw: string): Promise<SearchResult[]> {
    const res = await http.fetch({
      path: 'search/one',
      queryParams: {kw: kw}
    });
    return res.response;
  }

  async search(kw: string): Promise<SearchResult[]> {
    const res = await http.fetch({
      path: 'search',
      queryParams: {kw: kw}
    });
    return res.response;
  }

}