import mapboxgl from 'mapbox-gl';
export default class GeoJSONLayer {
  map: mapboxgl.Map;
  source: mapboxgl.Source;
  layer: mapboxgl.Layer;
  id: string;

  constructor(dataUrl: string, id: string, map: mapboxgl.Map) {
  }
}