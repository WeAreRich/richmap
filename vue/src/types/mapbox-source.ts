export class MapboxSource {
  ID: number | string;
  type: string;
  name: string;
  url: string;
  year: number;


  constructor(ID: number, type: string, name: string, url: string, year: number) {
    this.ID = ID;
    this.type = type;
    this.name = name;
    this.url = url;
    this.year = year;
  }
}