export class SearchItem{
    public href:String;
    public title:String;
    public author: String;
    public abstract_info:String;
    public picture: String;
}

export class SearchResult{
    public kind: String;
    public result:SearchItem[];
}

export class SearchService {
  rp = require('request-promise');
  request = require('request');
  cheerio = require('cheerio');


  public async getItem(kw: String){
     let result:SearchResult[] = [];
     await this.getBaiduItem(kw,result);
     await this.getWeixinItem(kw,result);
     return result;
  }
  

  public async getBaiduItem(kw: String, resultArray:SearchResult[]){
    let options = {
        method: 'get',
        url: encodeURI("http://xueshu.baidu.com/s?wd="+kw)
    }; 
    let value: SearchResult = new SearchResult();
    value.kind = '百度';
    let result:SearchItem[] = [];
    let body = await this.rp(options);
    let $ = this.cheerio.load(body);
    $('.sc_content').each(function(i, elem) {
        let item:SearchItem = new SearchItem();
        item.href = "http://xueshu.baidu.com"+($(this).children(".c_font").children('a').attr('href'));
        item.title = ($(this).children(".c_font").children('a').text());
        item.author = ($(this).children(".sc_info").text().replace(/\s+/g,""));
        item.abstract_info = ($(this).children(".c_abstract").text().replace(/\s+/g,"")).split('来源')[0];
        result.push(item);
    });
    value.result = result;
    resultArray.push(value)
  }
 
  public async getWeixinItem(kw:String, resultArray:SearchResult[]){
    var  options = {
        method: 'get',
        url: encodeURI("http://weixin.sogou.com/weixin?type=2&query="+kw)
    }; 
    let value:SearchResult = new SearchResult();
    let result:SearchItem[] = [];
    value.kind = "微信";
    let body = await this.rp(options);
    let $ = this.cheerio.load(body);
    $('.txt-box').each(function(i, elem) {
        let item:SearchItem = new SearchItem();
        item.href = $(this).children("h3").children('a').attr('href');
        item.title = $(this).children("h3").children('a').text();
        item.abstract_info = $(this).children(".txt-info").text().replace(/\s+/g,"");
        try{
            item.picture = $(this).parent().children(".img-box").children("a").children('img').attr('src').split('&url=')[1];
        }catch(err){
            
        }
        result.push(item);
    });
    value.result = result;
    resultArray.push(value)
  }

}
