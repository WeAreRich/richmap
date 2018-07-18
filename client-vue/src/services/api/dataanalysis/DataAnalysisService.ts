import {MapTypeOption} from "src/models/MapTypeOption";
import http from "src/services/HttpService/index";

export class DataAnalysisService {
    async getPoorState(): Promise<MapTypeOption[]> {
        const res = await http.fetch({
            path: `analysis/state`,
        });
        return res.response;
    }
}