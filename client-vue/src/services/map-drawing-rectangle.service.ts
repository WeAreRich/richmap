import mapboxgl from 'mapbox-gl';
import { GeoJSON } from '@/node_modules/@types/geojson';
import { Logger } from '@/services/Logger';

/**
 * 回调函数的返回值， 一个矩形区域
 */
export class RectangleBound {
  startPoint: GeoJSON.Position; // sw
  endPoint: GeoJSON.Position; // ne
}

export default class MapDrawingRectangleService {
  private TAG = 'MapDrawingRectangleService';

  private isDrawing: boolean;
  private data: GeoJSON.Feature<GeoJSON.Polygon>;
  private path: GeoJSON.Position[];
  private startPoint: GeoJSON.Position;
  private map: mapboxgl.Map;
  private readonly callback: Function;

  private REC_LAYER_ID = 'rec-layer-id';

  /**
   * @param {mapboxgl.Map} map mapbox的地图对象
   * @param {Function} onFinishDrawing 在完成绘画之后的回调，返回值为 rec: RectangleBound
   */
  constructor(map: mapboxgl.Map, onFinishDrawing?: Function) {
    this.map = map;
    this.startPoint = [];
    this.map.on('mousedown', this.startDrawing);
    this.map.on('mousemove', this.drawing);
    this.map.on('mouseup', this.endDrawing);

    this.callback = onFinishDrawing;
  }

  public startDrawing = (e: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent) => {
    // 禁用拖动
    this.map.dragPan.disable();
    this.startPoint = [e.lngLat.lng, e.lngLat.lat];
    this.isDrawing = true;
  };

  public drawing = (e: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent) => {
    if (!this.isDrawing) return;
    Logger.info(this.TAG, 'drawing', e.lngLat);
    // 计算路径
    this.path = [this.startPoint];
    this.path.push([e.lngLat.lng, this.startPoint[1]]);
    let lngLat = [e.lngLat.lng, e.lngLat.lat];
    this.path.push(lngLat);
    this.path.push([this.startPoint[0], e.lngLat.lat]);
    this.path.push(this.startPoint);
    this.data = {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          this.path
        ]
      },
      properties: []
    };
    // 获得图层
    let layer = this.map.getLayer(this.REC_LAYER_ID);
    if (!layer) {
      // 如果没有图层就新建一个
      layer = {
        id: this.REC_LAYER_ID,
        type: 'line',
        source: {
          type: 'geojson',
          data: this.data
        },
        paint: {
          'line-color': '#f55',
          'line-width': 4
        }
      };
      this.map.addLayer(layer);
    } else {
      // 有就更新 source 以重绘
      (this.map.getSource(this.REC_LAYER_ID) as mapboxgl.GeoJSONSource).setData(this.data);
    }
    this.map.repaint = true;
    Logger.info(this.TAG, 'after source modified', layer);
  };

  public endDrawing = (e: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent) => {
    Logger.info(this.TAG, 'end drawing');
    this.isDrawing = false;

    // 解除监听
    this.map.off('mousedown', this.startDrawing);
    this.map.off('mousemove', this.drawing);
    this.map.off('mouseup', this.endDrawing);

    // 准备返回值
    let rec = new RectangleBound();
    rec.startPoint = [this.startPoint[0], this.startPoint[1]];
    rec.endPoint = [this.startPoint[0], this.startPoint[1]];
    this.path.forEach(item => {
      console.log(item);
      if (item[0] > rec.endPoint[0]) {
        rec.endPoint[0] = item[0];
      }
      if (item[0] < rec.startPoint[0]) {
        rec.startPoint[0] = item[0];
      }
      if (item[1] > rec.endPoint[1]) {
        rec.endPoint[1] = item[1];
      }
      if (item[1] < rec.startPoint[1]) {
        rec.startPoint[1] = item[1];
      }
    });
    if (this.callback) this.callback(rec);
    // 还原地图拖动
    this.map.dragPan.enable();
  };
}


