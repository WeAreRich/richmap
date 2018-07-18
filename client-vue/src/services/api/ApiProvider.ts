import {DataAnalysisServiceMock} from "@/services/api/dataanalysis/DataAnalysisServiceMock";
import {DataAnalysisService, DataAnalysisServiceImpl} from "@/services/api/dataanalysis/DataAnalysisService";

class ApiProvider {
    isMock: boolean = true;

    dataAnalysisService: DataAnalysisService;

    constructor() {
        if (this.isMock) {
            this.dataAnalysisService = new DataAnalysisServiceMock();
        } else {
            this.dataAnalysisService = new DataAnalysisServiceImpl();
        }
    }
}

export const api = new ApiProvider();