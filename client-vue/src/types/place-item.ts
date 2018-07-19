/* PlaceItem api 返回结果的数据结构 */
export default interface PlaceItem {
  boundingbox: number[],
  class: string;
  display_name: string;
  icon: string;
  lat: number;
  licence: string;
  lon: number;
  type: string;
}
