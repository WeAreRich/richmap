import { Logger } from '@/services/Logger';

export class MapSourceAnimationService {
  private TAG = 'MapSourceAnimationService';
  private ID = 'sourceId';
  private counter = 0;
  private layers: mapboxgl.Layer[] = [];
  private sourceIds: string[] = [];
  constructor(private map: mapboxgl.Map) {
  }

  /**
   * 增加一个地图资源
   * @param {string} sourceUrl
   * @return {Promise<string>}
   */
  public addSource(sourceUrl: string): Promise<string> {
    return new Promise((resolve => {
      let source: mapboxgl.RasterSource = {
        type: 'raster',
        url: sourceUrl
      };
      let id = this.ID + (this.counter++);
      this.map.addSource(id, source);
      this.sourceIds.push(id);
      this.map.on('sourcedata', () => {
        resolve(id);
      });
    }));
  }

  /**
   * 增加一系列地图资源
   * @param {string[]} sourceUrlList
   * @return {Promise<string[]>}
   */
  public addSources(sourceUrlList: string[]): Promise<string[]> {
    let promises = sourceUrlList.map(
      url => this.addSource(url)
    );
    return Promise.all(promises);
  }

  /**
   * 显示某一资源对应的图层
   * @param {string} id
   */
  public showLayer(id: string) {
    Logger.info(this.TAG, `id: ${id}`);
    let index = this.layers.findIndex(item => item.id === id);
    if (index > -1) {
      this.map.addLayer(this.layers[index]);
      Logger.info(this.TAG, `exist layer ${id}`);
    } else {
      Logger.info(this.TAG, `not exist layer ${id}`);
      let layer: mapboxgl.Layer = {
        id: id,
        type: 'raster',
        source: id
      };
      this.map.addLayer(layer);
      Logger.info(this.TAG, `add layer ${id}`);
      this.layers.push(layer);
    }
  }

  /**
   * 隐藏某一资源对应的图层
   * @param {string} id
   */
  public hideLayer(id: string) {
    let index = this.layers.findIndex(item => item.id === id);
    if (index > -1) {
      this.map.removeLayer(id);
    }
  }

  /**
   * 自动播放所有资源，从头开始
   */
  public autoDisplay() {
    this.sourceIds.sort();
    Logger.info(this.TAG, this.sourceIds);
    this.reAutoDisplay(0);
  }

  /**
   * 根据区间来自动播放
   * TODO: 实现，由于开始和结束的时间格式未定，未实现
   * @param start
   * @param end
   */
  public autoDisplayByRange(start: any, end: any) {

  }
  /**
   * 从头自动 播放的递归实现
   * @param index
   */
  private reAutoDisplay(index) {
    // 递归条件结束
    if (index === this.sourceIds.length) return;
    // 是否有上层
    if (index > 0) {
      this.hideLayer(this.sourceIds[index - 1]);
    }
    // 显示当前
    this.showLayer(this.sourceIds[index]);
    // 递归
    setTimeout(() => {
      this.reAutoDisplay(index + 1);
    }, 1000);
  }

  private reAutoDisplayByRange() {

  }
}