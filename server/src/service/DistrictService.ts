import { provide, inject } from '../ioc/ioc';
import TYPES from '../constant/types';
import { DistrictNumber } from '../entity/DistrictNumber';
import { OrmService } from '../util/orm/OrmService';
import { OrmServiceImpl } from '../util/orm/OrmServiceImpl';

@provide(TYPES.DistrictService)
export class DistrictService {
  private ormService: OrmService;

  constructor(
  ) {
    this.ormService = new OrmServiceImpl(new DistrictNumber());
  }

  public getByNumber(id:number): Promise<DistrictNumber> {
    return this.ormService.findByKey(String(id));
  }

  public getByName(name:String): Promise<DistrictNumber> {
    return this.ormService.find({name:name});
  }

  public getChildren(id:number): Promise<DistrictNumber[]>{
    return this.ormService.find({father:id});
  }

   public async getFather(id:number){
    let result:DistrictNumber;
    // try{
    let number:DistrictNumber =  await this.ormService.findByKey(String(id));
    console.log(number)
    result = await this.ormService.findByKey(String(number.father));
    console.log(result)
    return result;
  }
  

  
}
