import {MapTypeOption} from "src/models/MapTypeOption";
import http from "@/services/api/HttpService";

export interface DataAnalysisService {
    getPoorState(): Promise<MapTypeOption[]>;
}

export class DataAnalysisServiceImpl implements DataAnalysisService {
    async getPoorState(): Promise<MapTypeOption[]> {
        const res = await http.fetch({
            path: `analysis/state`,
        });
        return res.response;
    }
}