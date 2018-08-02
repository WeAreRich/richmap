import { controller, httpGet, httpPost,queryParam } from 'inversify-express-utils';
import {SearchService} from '../service/SearchService'
import { Request, Response } from 'express';

@controller('/search')
export class SearchController {
  
  private searchSerice:SearchService;

  constructor( ) {
    this.searchSerice = new SearchService();
 }

  @httpGet('/search')
  public get(@queryParam("kw") kw:String){
    return this.searchSerice.getItem(kw);
  }
}
