import http from '../HttpService';

// export interface SearchService {
//   searchOne(kw: string): Promise<SearchResult[]>;
//
//   search(kw: string): Promise<SearchResult[]>;
// }

export class SearchServiceImpl {
  async searchOne(kw) {
    return http.get('/search/one', {kw});
  }

  async search(kw) {
    return http.get('/search', {kw});
  }

}
