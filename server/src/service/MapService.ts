import { provide, inject } from '../ioc/ioc';
import TYPES from '../constant/types';
import { DistrictNumber } from '../entity/DistrictNumber';
import { OrmService } from '../util/orm/OrmService';
import { OrmServiceImpl } from '../util/orm/OrmServiceImpl';
import {MapItem} from "../entity/MapItem";

export class MapService {
    private ormService: OrmService;

    constructor(
    ) {
        this.ormService = new OrmServiceImpl(new MapItem());
    }

    public getByYearAndName(year:string, name:string): Promise<MapItem> {
        return this.ormService.find({year: year, name:name});
    }

    public getByName(name:String): Promise<MapItem> {
        return this.ormService.find({name:name});
    }


}
