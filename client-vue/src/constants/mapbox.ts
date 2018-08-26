const ACCESS_TOKEN = 'pk.eyJ1Ijoid2VueGlhbmdkb25nIiwiYSI6ImNqajEyN2owYjBvNHYzdm10c2p2NXowM2kifQ.kixIr8Jwk2mAqmlQCWW88Q';
const CHINA_BOUNDS = [[70, 17], [140, 55]];
const HUBEI_BOUNDS =[[106.3,25.0],[120.3,36.3]];

const CHINA_CENTER = [104.999927, 35.000074];
let mapStyles = {
  'night-light-2001': 'mapbox://styles/wenxiangdong/cjjuyolqw21sf2rmmrrp13azv',
  'night-light-2013': 'mapbox://styles/wenxiangdong/cjjuzjzid0a1a2ro45v4abumf'
};

let tileSets = {
  'DEM': 'mapbox://wenxiangdong.bp3u4q4m',
  'GDP': 'mapbox://wenxiangdong.d3cpxjy6',
  'slope': 'mapbox://wenxiangdong.3yngbsb6',
  'nightLight': 'mapbox://wenxiangdong.527q7f2p'
};
const REC_LAYER_ID = 'rec-layer-id';
const LINE_LAYER_ID = 'line-layer-id';
export { ACCESS_TOKEN, CHINA_BOUNDS, CHINA_CENTER, mapStyles, REC_LAYER_ID, LINE_LAYER_ID, HUBEI_BOUNDS, tileSets };
