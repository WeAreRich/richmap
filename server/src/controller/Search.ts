import { controller, httpGet, httpPost, queryParam } from 'inversify-express-utils';
import { SearchService } from '../service/SearchService'

@controller('/search')
export class SearchController {

  private searchService: SearchService;

  constructor() {
    this.searchService = new SearchService();
  }

  @httpGet('')
  public get(@queryParam("kw") kw: string) {
    return this.searchService.getItem(kw);
  }
}
