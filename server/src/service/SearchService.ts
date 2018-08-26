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
     await this.getBaiduNewsItem(kw,result);
     await this.getSogoItem(kw,result);
     await this.getZhihuItem(kw,result);
     await this.stats_gov_cn(kw,result);
     await this.getYouChengItem(kw,result);
     await this.getJianPinItem(kw,result);
     await this.getLeadGroupItem(ke,result);
     return result;
  }
  

  public async getBaiduItem(kw: String, resultArray:SearchResult[]){
    let options = {
        method: 'get',
        url: encodeURI("http://xueshu.baidu.com/s?wd="+kw)
    }; 
    let value: SearchResult = new SearchResult();
    value.kind = '百度学术';
    let result:SearchItem[] = [];
    let body = await this.rp(options);
    console.log(body);
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

    public async getSogoItem(kw: String, resultArray:SearchResult[]){
        let options = {
            method: 'get',
            url: encodeURI("https://www.sogou.com/web?query="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '搜狗搜索';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        console.log(body);
        let $ = this.cheerio.load(body);
        $('.sc_content').each(function(i, elem) {
            let item:SearchItem = new SearchItem();

            result.push(item);

        });
        value.result = result;
        resultArray.push(value)
    }

    public async getZhihuItem(kw: String, resultArray:SearchResult[]){
        let options = {
            method: 'get',
            url: encodeURI("https://www.zhihu.com/search?type=content&q="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '知乎';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        console.log(body);
        let $ = this.cheerio.load(body);
        $('.sc_content').each(function(i, elem) {
            let item:SearchItem = new SearchItem();

            result.push(item);

        });
        value.result = result;
        resultArray.push(value)
    }

    public async stats_gov_cn(kw: String, resultArray:SearchResult[]){
        let options = {
            method: 'get',
            url: encodeURI("http://www.stats.gov.cn/was5/web/search?channelid=288041&andsen="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '国家统计局';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        console.log(body);
        let $ = this.cheerio.load(body);
        $('.sc_content').each(function(i, elem) {
            let item:SearchItem = new SearchItem();

            result.push(item);

        });
        value.result = result;
        resultArray.push(value)
    }

    public async getYouChengItem(kw: String, resultArray:SearchResult[]){
        let options = {
            method: 'get',
            url: encodeURI("http://www.youcheng.org/search.php?search_key="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '友成基金会';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        console.log(body);
        let $ = this.cheerio.load(body);
        $('.sc_content').each(function(i, elem) {
            let item:SearchItem = new SearchItem();

            result.push(item);

        });
        value.result = result;
        resultArray.push(value)
    }

    public async getJianPinItem(kw: String, resultArray:SearchResult[]){
        let options = {
            method: 'get',
            url: encodeURI("https://www.jianpincn.com/skwx_jp/Search.aspx?type=all&title=All&KeyWords="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '中国减贫研究数据库';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        console.log(body);
        let $ = this.cheerio.load(body);
        $('.sc_content').each(function(i, elem) {
            let item:SearchItem = new SearchItem();

            result.push(item);

        });
        value.result = result;
        resultArray.push(value)
    }

    public async getLeadGroupItem(kw: String, resultArray:SearchResult[]){
        let options = {
            method: 'get',
            url: encodeURI("http://www.cpad.gov.cn/jsearch/search.do?pagemode=result&appid=1&webid=1&style=1&pos=title%2Ccontent&pg=10&ck=o&tmp_od=0&q="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '国务院扶贫领导小组办公室';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        console.log(body);
        let $ = this.cheerio.load(body);
        $('.sc_content').each(function(i, elem) {
            let item:SearchItem = new SearchItem();

            result.push(item);

        });
        value.result = result;
        resultArray.push(value)
    }



  public async getBaiduNewsItem(kw:String,resultArray:SearchResult[]){
      let options = {
          method: 'get',
          url: encodeURI("https://news.baidu.com/ns?word=11"),
          headers: {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
          }
      };
      let value: SearchResult = new SearchResult();
      value.kind = '百度新闻';
      let result:SearchItem[] = [];
      let body = await this.rp(options);
      console.log(body);
      let $ = this.cheerio.load(body);

      this.request(options, function (err, res, body) {
          if (err) {
              console.log(err)
          }else {
              console.log(body)
          }
      });
      $('.result').each(function(i, elem) {

          let item:SearchItem = new SearchItem();
          item.href = ($(this).children(".c-title").children('a').attr('href'));
          item.title = ($(this).children(".c-title").children('a').text());

          item.abstract_info = ($(this).children(".c-summary c-row ").text());
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
