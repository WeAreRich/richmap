import mapboxgl from 'mapbox-gl';
import { GeoJSON } from '@/node_modules/@types/geojson';
import { Logger } from '@/services/logger';
import { REC_LAYER_ID } from '@/constants/mapbox';

export class MapDrawingRectangleService {
  private TAG = 'MapDrawingRectangleService';

  private isDrawing: boolean;
  private data: GeoJSON.Feature<GeoJSON.Polygon>;
  private path: GeoJSON.Position[];
  private startPoint: GeoJSON.Position;
  private map: mapboxgl.Map;
  private readonly callback: Function;

  // private REC_LAYER_ID = 'rec-layer-id';

  /**
   * @param {mapboxgl.Map} map mapbox的地图对象
   * @param {Function} onFinishDrawing 在完成绘画之后的回调，返回值为 rec: RectangleBound
   */
  constructor(map: mapboxgl.Map, onFinishDrawing?: (rect: mapboxgl.LngLatBounds) => void) {
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
    let layer = this.map.getLayer(REC_LAYER_ID);
    if (!layer) {
      // 如果没有图层就新建一个
      layer = {
        id: REC_LAYER_ID,
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
      (this.map.getSource(REC_LAYER_ID) as mapboxgl.GeoJSONSource).setData(this.data);
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
    let startPoint = [this.startPoint[0], this.startPoint[1]];
    let endPoint = [this.startPoint[0], this.startPoint[1]];
    this.path.forEach(item => {
      console.log(item);
      if (item[0] > endPoint[0]) {
        endPoint[0] = item[0];
      }
      if (item[0] < startPoint[0]) {
        startPoint[0] = item[0];
      }
      if (item[1] > endPoint[1]) {
        endPoint[1] = item[1];
      }
      if (item[1] < startPoint[1]) {
        startPoint[1] = item[1];
      }
    });
    let bounds = new mapboxgl.LngLatBounds(startPoint, endPoint);
    if (this.callback) this.callback(bounds);
    // 还原地图拖动
    this.map.dragPan.enable();
  };
}


