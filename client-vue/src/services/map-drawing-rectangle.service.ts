import mapboxgl from 'mapbox-gl';
import { GeoJSON } from '@/node_modules/@types/geojson';

export default class MapDrawingRectangleService {
  private isDrawing: boolean;
  private data: GeoJSON.Feature<GeoJSON.Polygon>;
  private path: GeoJSON.Position[];
  private startPoint: GeoJSON.Position;
  private map: mapboxgl.Map;

  private REC_LAYER_ID = 'rec-layer-id';

  constructor(map: mapboxgl.Map) {
    this.map = map;
    this.startPoint = [];
  }

  public startDrawing(e: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent) {
    this.startPoint = [e.lngLat.lng, e.lngLat.lat];
    // this.path = [this.startPoint];
    let source = new mapboxgl.GeoJSONSource();
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
    source.setData(this.data);
    this.map.addSource(this.REC_LAYER_ID, source);

    // 加图层
    let layer: mapboxgl.Layer = {
      id: this.REC_LAYER_ID,
      source: this.REC_LAYER_ID
    }
    this.map.addLayer(layer);
  }

  public drawing(e: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent) {
    this.path = [this.startPoint];
    let lngLat = [e.lngLat.lng, e.lngLat.lat];
    this.path.push(lngLat);
    this.path.push([this.startPoint[0], e.lngLat.lat]);
    this.path.push([e.lngLat.lng, this.startPoint[1]]);
    this.data.geometry.coordinates
  }
}

