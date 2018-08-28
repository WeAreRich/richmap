import mapboxgl from 'mapbox-gl';
import { Logger } from '@/services/Logger';
import { REC_LAYER_ID } from '@/constants/mapbox';

export class MapLocatePositionService {

  private static marker: mapboxgl.Marker;
  /**
   * 定位到某一个 bounds 区域
   * @param {mapboxgl.LngLatBounds} rec
   * @param {mapboxgl.Map} map
   * @param {boolean} eraseBounds 是否在缩放后去掉边框
   */
  public static locateToBounds(rec: mapboxgl.LngLatBounds, map: mapboxgl.Map, eraseBounds: boolean = false) {
    Logger.info('MapLocatePositionService', 'locateToBounds', rec);
    map.fitBounds(rec);
    if (eraseBounds) {
      map.removeLayer(REC_LAYER_ID);
    }
  }

  /**
   * 定位到某一点
   * @param {mapboxgl.LngLatLike} pos
   * @param {mapboxgl.Map} map
   * @param {number} zoom 缩放等级 默认7
   */
  public static locateToPosition(pos: mapboxgl.LngLatLike, map: mapboxgl.Map, zoom: number = 7, showMark: boolean = true) {
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