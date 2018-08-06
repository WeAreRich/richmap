export class SearchItem {
  public href: String;
  public title: String;
  public author: String;
  public abstract_info: String;
  public picture: String;
}

export class SearchResult {
  public kind: String;
  public result: SearchItem[];
}