/* Nominatim api 返回结果的数据结构 */
export interface Nominatim {
  class: string;
  display_name: string;
  icon: string;
  lat: number;
  licence: string;
  lon: number;
  type: string;
}
