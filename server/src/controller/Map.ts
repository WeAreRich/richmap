import { controller, httpGet, httpPost, queryParam } from 'inversify-express-utils';
import {MapService} from "../service/MapService";
// import { SearchService } from '../service/SearchService'

@controller('/map')
export class MapController {

    private mapService: MapService;
    //
    constructor() {
        this.mapService = new MapService();
    }

    @httpGet('/year')
    public getByYear(@queryParam("year") year: string, @queryParam("name") name:string) {
        console.log(year+" "+name);
        return this.mapService.getByYearAndName(year, name);
    }


    @httpGet('/')
    public get(@queryParam("name") name:string) {
        return this.mapService.getByName(name);
    }



}
