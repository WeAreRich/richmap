import { Logger } from './Logger'
import { REC_LAYER_ID } from '../constants/mapbox';
import mapboxgl from 'mapbox-gl';

export class MapLocatePositionService {

  static marker;
  /**
   * 定位到某一个 bounds 区域
   * @param {mapboxgl.LngLatBounds} rec
   * @param {mapboxgl.Map} map
   * @param {boolean} eraseBounds 是否在缩放后去掉边框
   */
  static locateToBounds(rec, map, eraseBounds = false) {
    Logger.info('MapLocatePositionService', 'locateToBounds', rec);
    map.fitBounds(rec);
    if (eraseBounds) {
      map.removeLayer(REC_LAYER_ID);
    }
  }

  /**
   * 定位到某一点
   * @param {int[]} pos
   * @param {mapboxgl.Map} map
   * @param {number} zoom 缩放等级 默认7
   * @param {boolean} showMark 是否显示一个 标记
   */
  static locateToPosition(pos, map, zoom = 0, showMark = true) {
    zoom = map.getZoom();
    Logger.info('map-location', 'zoom:' + zoom);
    map.flyTo({
      center: pos,
      curve: 1,
      zoom: zoom
    });
    if (showMark) {
      if (this.marker) {
        this.marker.remove();
      }
      this.marker = new mapboxgl.Marker()
        .setLngLat(pos)
        .addTo(map);
    }
  }
}
