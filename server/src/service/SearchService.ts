export class SearchItem{
    public href:String;
    public title:String;
    public author: String;
    public abstract_info:String;
    public picture: String;
    public time:String;
}

export class SearchResult{
    public kind: String;
    public result:SearchItem[];
}

export class SearchService {
  rp = require('request-promise');
  request = require('request');
  cheerio = require('cheerio');

  public async getOneItem(kw: String){
      let result:SearchResult[] = [];
      let res = await Promise.all(
          [
              this.getBaiduItem(kw)
          ]);
      res.forEach(function(value,index,array){
          result.push(value[0]);
      });
      return result;
  }

  public async getItem(kw: String){
     let result:SearchResult[] = [];
     let res = await Promise.all(
         [
             this.getWeixinItem(kw),
             this.getBaiduNewsItem(kw),
             this.getSogoItem(kw),
             this.getZhihuItem(kw),
             // this.stats_gov_cn(kw),
             this.getYouChengItem(kw),
             this.getJianPinItem(kw),
             this.getLeadGroupItem(kw)
         ]);
     res.forEach(function(value,index,array){
         result.push(value[0]);
     });
     return result;
  }


  public async getBaiduItem(kw: String){
      let resultArray: SearchResult[] = [];

      let options = {
        method: 'get',
        url: encodeURI("http://xueshu.baidu.com/s?wd="+kw)
    };
    let value: SearchResult = new SearchResult();
    value.kind = '百度学术';
    let result:SearchItem[] = [];
    let body = await this.rp(options);

    let $ = this.cheerio.load(body);
    $('.sc_content').each(function(i, elem) {
        let item:SearchItem = new SearchItem();
        item.href = "http://xueshu.baidu.com"+($(this).children(".c_font").children('a').attr('href'));
        item.title = (i+1)+"."+($(this).children(".c_font").children('a').text());
        item.author = ($(this).children(".sc_info").text().replace(/\s+/g,""));
        item.abstract_info = ($(this).children(".c_abstract").text().replace(/\s+/g,"")).split('来源')[0];
        result.push(item);
    });
    value.result = result;
    resultArray.push(value);
      return resultArray;
  }

    public async getSogoItem(kw: String){
        let resultArray: SearchResult[] = [];
        let options = {
            method: 'get',
            url: encodeURI("https://www.sogou.com/web?query="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '搜狗搜索';
        let result:SearchItem[] = [];
        let body = await this.rp(options);

        let $ = this.cheerio.load(body);
        $('.vrwrap').each(function(i, elem) {
            if(i<9) {
                if (i == 0) {
                    // console.log($(this).html())
                }
                let item: SearchItem = new SearchItem();
                item.title = (i+1)+"."+($(this).children('.vrTitle').text());
                item.href = "http://www.sogo.com" + ($(this).children('.vrTitle').children('a').attr('href'));
                item.abstract_info = $(this).children('.strBox').children('.str_info').text();
                if (item.abstract_info === "") {
                    item.abstract_info = $(this).children('.strBox').children('.str_info_div').text();
                }
                if (item.abstract_info === "") {
                    item.abstract_info = $(this).children('.str-text-info').text();
                }
                if (item.abstract_info === "") {
                    item.abstract_info = $(this).children('.str-pd-box').children('.str_info').text();
                }
                if (item.abstract_info === "") {
                    item.abstract_info = $(this).children('.str_info_div').children('.str_info').text();
                }
                // try {
                //     item.picture = $(this).children('.strBox').children('.str_div').children('a').children('img').attr('src');
                //     if (!item.picture) {
                //         item.picture = $(this).children('.str-pd-box').children('.str_div').children('a').children('img').attr('src');
                //     }
                // } catch (e) {
                //
                // }
                if (!item.title.endsWith('人还搜了')&& item.title!=""&&item.abstract_info!="")
                    result.push(item);
            }
        });
        value.result = result;

        resultArray.push(value);
        return resultArray;
    }

    public async getZhihuItem(kw: String){
        let resultArray: SearchResult[] = [];
        let options = {
            method: 'get',
            url: encodeURI("https://www.zhihu.com/search?type=content&q="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '知乎';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        let $ = this.cheerio.load(body);
        $('.AnswerItem').each(function(i, elem) {
            let item:SearchItem = new SearchItem();
            item.title = (i+1)+"."+($(this).children('.ContentItem-title').children('div').text());
            item.href = "https://www.zhihu.com" + $(this).children('.ContentItem-title').children('div').children('a').attr('href');
            item.abstract_info = ($(this).children('.RichContent').children('.RichContent-inner').text());
            item.author = ($(this).children('.RichContent').children('.RichContent-inner').text().split("：")[0]);
            // if(i==0) {
            //     console.log("here");
            //     console.log($(this).children('.RichContent').children('.RichContent-inner').text());
            // }
            result.push(item);
        });
        value.result = result;
        resultArray.push(value);
        return resultArray;
    }

    public async stats_gov_cn(kw: String){
        let resultArray: SearchResult[] = [];
        let options = {
            method: 'get',
            url: encodeURI("http://www.stats.gov.cn/was5/web/search?channelid=288041&andsen="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '国家统计局';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        let $ = this.cheerio.load(body);
        $('.center_list_contlist').each(function(i, elem) {
            $(this).children('li').each(function(i, elem) {
                if(i%2==0&&i<10) {
                    let item: SearchItem = new SearchItem();
                    $(this).children('.cont_tit').each(function (i, elem) {
                        if (i == 0)
                            $(this).children('font').each(function (i, elem) {
                                if (i == 0) {
                                    item.title =(i+1)+"."+ $(this).text();
                                    item.href = $(this).html().split('urlstr = \'')[1].split('\';')[0];
                                    console.log($(this).html().split('urlstr = \'')[1].split('\';')[0]);
                                }
                            });
                        if(i==1){
                            item.abstract_info = $(this).text();
                        }
                    });
                    result.push(item);
                }
            });
        });
        value.result = result;
        resultArray.push(value);
        return resultArray;
    }

    public async getYouChengItem(kw: String){
        let resultArray: SearchResult[] = [];
        let options = {
            method: 'get',
            url: encodeURI("http://www.youcheng.org/search.php?search_key="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '友成基金会';
        let result:SearchItem[] = [];
        let body = await this.rp(options);

        let $ = this.cheerio.load(body);

        $('.search_div').each(function(i, elem) {
            $(this).children('ul').children('li').each(function (i, elem) {
                if(i<5) {
                    let item: SearchItem = new SearchItem();
                    item.title = (i+1)+"."+($(this).text());
                    item.href = "http://www.youcheng.org/" + $(this).children('a').attr('href');
                    if (i == 0)
                        console.log($(this).html());
                    result.push(item);
                }
            });
            value.result = result;
            resultArray.push(value)
        });
        return resultArray;
    }

    public async getJianPinItem(kw: String){
        let resultArray: SearchResult[] = [];
        let options = {
            method: 'get',
            url: encodeURI("https://www.jianpincn.com/skwx_jp/Search.aspx?type=all&title=All&KeyWords="+kw)
        };
        let value: SearchResult = new SearchResult();
        value.kind = '中国减贫研究数据库';
        let result:SearchItem[] = [];
        let body = await this.rp(options);

        let $ = this.cheerio.load(body);
        $('.book_right1').each(function(i, elem) {
            let item:SearchItem = new SearchItem();
            $('h2').each(function(i1, elem){
                item.title=(i+1)+"."+($(this).text());
                item.href="https://www.jianpincn.com/skwx_jp/"+($(this).children('a').attr('href'));
            });

            item.abstract_info = ($(this).children("p").text());

            item.author=($(this).children(".list1").text());
            if(item.abstract_info!=undefined&&item.abstract_info!="")
            result.push(item);

        });
        value.result = result;
        resultArray.push(value);
        return resultArray;
    }

    public async getLeadGroupItem(kw){
        let resultArray: SearchResult[] = [];
        let options = {
            method: 'get',
            url: ("http://www.cpad.gov.cn/jsearch/search.do?pos=title%2Ccontent&q="+encodeURI(kw)+"&pagemode=result&appid=1&style=1&ck=o")
        };
        let value: SearchResult = new SearchResult();
        value.kind = '国务院扶贫领导小组办公室';
        let result:SearchItem[] = [];
        let body = await this.rp(options);
        let $ = this.cheerio.load(body);
        $('.js-result').each(function(i, elem) {
            $('table').each(function(i, elem) {
                if(i!=0&&i<=5) {
                    let item: SearchItem = new SearchItem();
                    $(this).children('tbody').children('tr').each(function(i, elem) {
                        if(i==0) {
                            item.title =(i+1)+"."+ $(this).text();
                            $(this).children('td').each(function(i, elem) {
                                item.href = $(this).children('a').attr('href');
                            });
                            // item.href = $(this).children('jsearchblue').children('a').attr('href');
                        }
                        if(i==1){
                            item.abstract_info = $(this).text();
                        }
                    });
                    result.push(item);
                }
            });

        });
        value.result = result;
        resultArray.push(value);
        return resultArray;
    }



  public async getBaiduNewsItem(kw:String){
      let resultArray: SearchResult[] = [];
      let options = {
          method: 'get',
          url: encodeURI("https://news.baidu.com/ns?word="+kw),
          headers: {
              'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
          }
      };
      let value: SearchResult = new SearchResult();
      value.kind = '百度新闻';
      let result:SearchItem[] = [];
      let body = await this.rp(options);

      let $ = this.cheerio.load(body);

      this.request(options, function (err, res, body) {
          if (err) {
              console.log(err)
          }else {
             // console.log(body)
          }
      });
      $('.result').each(function(i, elem) {

          let item:SearchItem = new SearchItem();
          item.href = ($(this).children(".c-title").children('a').attr('href'));
          item.title = (i+1)+"."+($(this).children(".c-title").children('a').text());

          item.abstract_info = ($(this).children(".c-summary").text()).split("查看更多")[0];
          item.time = ($(this).children(".c-summary").children(".c-author").text());
          result.push(item);

      });
      value.result = result;
      resultArray.push(value);
      return resultArray;
  }

  public async getWeixinItem(kw:String){
      let resultArray: SearchResult[] = [];
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
        item.title =(i+1)+"."+ $(this).children("h3").children('a').text();
        item.abstract_info = $(this).children(".txt-info").text().replace(/\s+/g,"");
        // item.time = $(this).children(".s-p").text();
        // try{
        //     item.picture = $(this).parent().children(".img-box").children("a").children('img').attr('src').split('&url=')[1];
        // }catch(err){
        //
        // }
        result.push(item);
    });
    value.result = result;
    resultArray.push(value);
      return resultArray;
  }

}
