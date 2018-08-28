import { Logger } from '@/services/Logger';
import { MapboxSource } from '@/types/mapbox-source';
import Timer = NodeJS.Timer;

export class MapSourceAnimationService {
  private TAG = 'MapSourceAnimationService';
  private ID = 'sourceId';
  private counter = 0;
  private layers: mapboxgl.Layer[] = [];
  private sourceIds: string[] = [];
  private timeId;

  private mapboxSources: MapboxSource[] = [];
  constructor(private map: mapboxgl.Map) {
  }

  /**
   * 增加一个地图资源
   * @param {MapboxSource} mapBoxSource
   * @return {Promise<string>}
   */
  public addSource(mapBoxSource: MapboxSource): Promise<string> {
    return new Promise((resolve => {
      let source: mapboxgl.RasterSource = {
        type: 'raster',
        url: mapBoxSource.url
      };
      let id = this.ID + (this.counter++);
      mapBoxSource.ID = id;
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
  public addSources(mapboxSources: MapboxSource[]): Promise<string[]> {
    this.mapboxSources = mapboxSources;
    let promises = mapboxSources.map(
      source => this.addSource(source)
    );
    return Promise.all(promises);
  }

  /**
   * 显示某一资源对应的图层
   * @param {string} id
   */
  public showLayer(id: string | number) {
    Logger.info(this.TAG, `show layer: ${id}`);
    let index = this.layers.findIndex(item => item.id === id.toString());
    if (index > -1) {
      this.map.addLayer(this.layers[index]);
      Logger.info(this.TAG, `exist layer ${id}`);
    } else {
      Logger.info(this.TAG, `not exist layer ${id}`);
      let layer: mapboxgl.Layer = {
        id: id.toString(),
        type: 'raster',
        source: id.toString()
      };
      this.map.addLayer(layer);
      this.layers.push(layer);
    }
  }

  /**
   * 隐藏某一资源对应的图层
   * @param {string} id
   */
  public hideLayer(id: string | number) {
    if (this.layers.findIndex(layer => layer.id === id.toString()) > -1) {
      Logger.info(this.TAG, 'remove layer:' + id);
      this.map.removeLayer(id.toString());
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


  public stop() {
    Logger.info(this.TAG, '停止播放');
    clearTimeout(this.timeId);
    this.hideAllLayer();
  }
  /**
   * 根据区间来自动播放
   * TODO: 实现，由于开始和结束的时间格式未定，未实现
   * @param start
   * @param end
   */
  public autoDisplayByRange(start: number, end: number) {
    const rangeSources = this.mapboxSources.filter(source => start <= source.year && source.year <= end);
    Logger.info(this.TAG, 'will to play range' ,rangeSources);
    this.reAutoDisplayByRange(rangeSources, 0);
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

  private reAutoDisplayByRange(sources: MapboxSource[], index: number) {
    if (index === sources.length) return;
    // 是否有上层
    if (index > 0) {
      this.hideLayer(sources[index - 1].ID);
    }
    // 显示当前
    this.showLayer(sources[index].ID);
    // 递归
    this.timeId = setTimeout(() => {
      this.reAutoDisplayByRange(sources, index + 1);
    }, 1000);
  }

  private hideAllLayer() {
    Logger.info(this.TAG, 'hide all');
    this.layers.forEach(layer => {
      try {
          this.map.removeLayer(layer.id);
      } catch (e) {}
    })
  }
}