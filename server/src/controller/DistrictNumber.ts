import {
    controller, httpGet, httpPost, httpPut, httpDelete,requestParam,request,queryParam
  } from 'inversify-express-utils';
  import { Request } from 'express';
import { DistrictService } from '../service/DistrictService';
import { DistrictNumber } from '../entity/DistrictNumber';
  
  
  @controller('/district')
  export class DistrictController {
  
    private districtService:DistrictService
    constructor( ) {
        this.districtService = new DistrictService()
     }

  
    @httpGet('/getName')
    public getByID(@queryParam("id") id: number,request: Request): Promise<DistrictNumber> {
      return this.districtService.getByNumber(id);
    }

    @httpGet('/getID')
    public getByName(@queryParam("name") name: string,@request() req: Request): Promise<DistrictNumber> {
      return this.districtService.getByName(name);
    }

    @httpGet('/getChildren')
    public getChildren(@queryParam("id") id: number,@request() req: Request): Promise<DistrictNumber[]> {
      return this.districtService.getChildren(id);
    }

    @httpGet('/getFather')
    public getFather(@queryParam("id") id: number,@request() req: Request): Promise<DistrictNumber> {
        
        return this.districtService.getFather(id);
    }
  
  }
  