import mapboxgl from 'mapbox-gl';
export default class GeoJSONLayer {
  source: mapboxgl.Source;
  layer: mapboxgl.Layer;
  id: string;

  constructor(dataUrl: string) {

  }
}