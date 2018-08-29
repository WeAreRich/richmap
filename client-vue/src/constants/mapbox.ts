const ACCESS_TOKEN = 'pk.eyJ1Ijoid2VueGlhbmdkb25nIiwiYSI6ImNqajEyN2owYjBvNHYzdm10c2p2NXowM2kifQ.kixIr8Jwk2mAqmlQCWW88Q';
const CHINA_BOUNDS = [[70, 17], [140, 55]];
// 108.3,29.0,116.3,33.3
const HUBEI_BOUNDS =[[108.3,29.0],[116.3,33.3]];
const HUBEI_CENTER = [112.3, 31.2];

const CHINA_CENTER = [104.999927, 35.000074];
let mapStyles = {
  'night-light-2001': 'mapbox://styles/wenxiangdong/cjjuyolqw21sf2rmmrrp13azv',
  'night-light-2013': 'mapbox://styles/wenxiangdong/cjjuzjzid0a1a2ro45v4abumf'
};

let tileSets = {
  'hubeiDEM': 'mapbox://wenxiangdong.6mjehw01',
  'hubeiGDP': 'mapbox://wenxiangdong.aa00vskv',
  'hubeiSlope': 'mapbox://wenxiangdong.9vwvp9tc',
  'hubieNightLight': 'mapbox://wenxiangdong.527q7f2p'
};
const REC_LAYER_ID = 'rec-layer-id';
const LINE_LAYER_ID = 'line-layer-id';

const TOP_LAYER_ID = 'place-city-sm';
export { ACCESS_TOKEN, CHINA_BOUNDS, CHINA_CENTER, mapStyles, REC_LAYER_ID, LINE_LAYER_ID, HUBEI_BOUNDS, HUBEI_CENTER, tileSets, TOP_LAYER_ID };
