import {MapTypeOption} from "@/models/MapTypeOption";

export class DataAnalysisServiceMock {
    async getPoorState(): Promise<MapTypeOption[]> {
        const mapTypeOptionList: MapTypeOption[] = [
            {
                value: "综合贫困排名",
                label: "综合贫困排名",
                children: [
                    {
                        value: "VSR指标排名",
                        label: "VSR指标排名",
                        children: [
                            {
                                value: "夜间灯光指标",
                                label: "夜间灯光指标",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                value: "分类贫困排名",
                label: "分类贫困排名",
                children: [
                    {
                        value: "经济指标排名",
                        label: "经济指标排名",
                        children: [
                            {
                                value: "未来收入",
                                label: "未来收入",
                                children: []
                            }
                        ]
                    }
                ]
            },
        ];
        return mapTypeOptionList;
    }
}