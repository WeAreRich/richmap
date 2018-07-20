import {
    controller, httpGet, httpPost, httpPut, httpDelete
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

  
    @httpGet('/getName/:id')
    public getByID(request: Request): Promise<DistrictNumber> {
        console.log("receive")
      return this.districtService.getByNumber(request.params.id);
    }

    @httpGet('/getID')
    public getByName(request: Request): Promise<DistrictNumber> {
        console.log("receive")
      return this.districtService.getByName(request.params.name);
    }
  
  }
  