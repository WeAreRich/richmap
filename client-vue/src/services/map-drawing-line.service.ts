import mapboxgl from 'mapbox-gl';
import { GeoJSON } from '@/node_modules/@types/geojson';
import { Logger } from '@/services/logger';

/* 在地图上画一条任意形状的线 */
export default class MapDrawingLineService {
  private TAG = 'MapDrawingRectangleService';

  private isDrawing: boolean;
  private data: GeoJSON.Feature<GeoJSON.LineString>;
  private path: GeoJSON.Position[];
  private startPoint: GeoJSON.Position;
  private map: mapboxgl.Map;
  private readonly callback: Function;

  private LINE_LAYER_ID = 'line-layer-id';

  /**
   * @param {mapboxgl.Map} map mapbox的地图对象
   * @param {Function} onFinishDrawing 在完成绘画之后的回调，返回值为 path: Position[]
   */
  constructor(map: mapboxgl.Map, onFinishDrawing?: (path: Position[]) => void) {
    this.map = map;
    this.startPoint = [];
    this.path = [];
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
    this.path.push(this.startPoint);
  };

  public drawing = (e: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent) => {
    if (!this.isDrawing) return;
    // 计算路径
    this.path.push([e.lngLat.lng, e.lngLat.lat]);
    this.data = {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates:
          this.path
      },
      properties: []
    };
    // 获得图层
    let layer = this.map.getLayer(this.LINE_LAYER_ID);
    if (!layer) {
      // 如果没有图层就新建一个
      layer = {
        id: this.LINE_LAYER_ID,
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
      (this.map.getSource(this.LINE_LAYER_ID) as mapboxgl.GeoJSONSource).setData(this.data);
    }
    this.map.repaint = true;
  };

  public endDrawing = (e: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent) => {
    Logger.info(this.TAG, 'end drawing');
    this.isDrawing = false;

    this.path.push(this.startPoint);
    this.data = {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates:
          this.path
      },
      properties: []
    };
    (this.map.getSource(this.LINE_LAYER_ID) as mapboxgl.GeoJSONSource).setData(this.data);

    // 解除监听
    this.map.off('mousedown', this.startDrawing);
    this.map.off('mousemove', this.drawing);
    this.map.off('mouseup', this.endDrawing);

    this.callback(this.path);
  };
}


