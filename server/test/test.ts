
'use strict';
import 'mocha';
// import {Promise} from 'es6-promise'
// let a = ():void=>{
//   console.log("aaa")
// }

// function b(p:()=>void){
//   p()
// }
// //  一个promise中只会去调用其中的一个
// const promise = new Promise((resolve, reject) => {
//   reject("hhhh")
//   resolve(123);
// });
// promise.then((res) => {
//   console.log('I get called:', res === 123); // I get called: true
// });
// promise.catch((err) => {
//   // 不被调用
//   console.log(err)
// });

// b(a);

// console.log("i am ts")


// async function testAsync() {
//   return "hello async";
// }
// async function hhha(){
//   const result = testAsync();
//   await result.then(v=>{
//     console.log(v)  
//   });
//   console.log(result);
// }
// hhha()

import {TypeOrmConnection} from "../src/util/orm/connection"
import { User } from '../src/entity/User';
import { BaseOrmClass } from '../src/util/orm/BaseOrmClass';
import {OrmServiceImpl} from "../src/util/orm/OrmServiceImpl";
import { DistrictNumber } from '../src/entity/DistrictNumber';
import { print } from 'util';
import { Level } from '../src/interface/Level';
import { DistrictService } from '../src/service/DistrictService';
import { DEFAULT_ECDH_CURVE } from 'tls';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';


// function getSomething() {
//   return "something";
// }

// async function testAsync() {
//   return Promise.resolve("hello async");
// }

// async function test() {
//   const v1 = await getSomething();
//   const v2 = await testAsync();
//   console.log(v1, v2);
// }

// test();

// async function test(){
//   let connection =await TypeOrmConnection.getConnection();
// }
// let user:User = new User();
// user.id = 1; user.age = 12;
// user.firstName = "aa"; user.lastName = "bbb";
// let base:BaseOrmClass = user;
// let user1:User =new User();
// let properties = Object.getOwnPropertyNames(base)
// properties.forEach(function (value) {
//   user1[value] = base[value]
// }); 
// console.log(user1)
// console.log(base.constructor.name)
// test();
// // connection.then((connection1)=>{
//    console.log("this begin")
//    connection1.close()
// })
// let service:OrmServiceImpl = new OrmServiceImpl(new DistrictNumber());

// service.find({father:371100}).then(v=>{
//   console.log(v)
// })
// var fs = require('fs');

// fs.readFile('./data.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         let array = data.split('\n')
//         console.log(array[0])
//         let currentP = array[0].split('\t')[0];
//         let currentC = array[1].split('\t')[0];
//         array.forEach(element => {
//           // console.log(element)
//            let value = element.split('\t')
//            let item:DistrictNumber = new DistrictNumber();
//            item.id = value[0]
//            item.name = value[1]
//            item.level = 0
//            if(item.id%10000 == 0){
//               item.level = 3;
//               item.father = 86
//               currentP = item.id
//            }else if(item.id%100 == 0){
//               item.level = 2;
//               item.father = currentP
//               currentC = item.id; 
//            }else{
//               item.level = 1;
//               item.father = currentC
//            }
//           //  console.log(item)
//            service.insert(item).then(v=>{
//              console.log(v)
//            }).catch(v=>{
//              console.log(v)
//            })
//         });
//     }
// });
// let dService:DistrictService = new DistrictService();
// dService.getByNumber(371100).then(v=>{
//   let districtNumber = DistrictNumber.convertToUser(v)
//   console.log(districtNumber)
// })

// service.checkKeyExists("2").then(v=>{
//   console.log(v)
// })
// service.insert(user).then(v=>{
//   service.checkKeyExists("3").then(v=>{
//     console.log(v)
//   })
// });
// service.findByKey("1").then(v=>{
//   let user = User.convertToUser(v);
//   console.log(user);
// }).catch(err=>{
//   // console.log(err)
// })

// service.delete("1").then(v=>{
//   service.findByKey("1").then(v=>{
//     let user = User.convertToUser(v);
//     console.log(user);
//   }).catch(err=>{
//     // console.log(err)
//   })
// });

// })

var request = require('request');
var cheerio = require('cheerio')

/**
 *  百度爬虫
 */
var  options = {
　　 method: 'get',
    url: encodeURI("http://xueshu.baidu.com/s?wd=贫困")
}; 

request(options, function (err, res, body) {
    if (err) {
        console.log(err)
    }else {
        let $ = cheerio.load(body);
        $('.sc_content').each(function(i, elem) {
            if(true){
                console.log("http://xueshu.baidu.com"+($(this).children(".c_font").children('a').attr('href')))
                console.log(($(this).children(".c_font").children('a').text()))
                console.log(($(this).children(".sc_info").text().replace(/\s+/g,"")))
                console.log(($(this).children(".c_abstract").text().replace(/\s+/g,"")).split('来源')[0])
                console.log('\n')
            }
        });
    }
})

/**
 *  搜狗微信爬虫
 */

var  options = {
    　　 method: 'get',
        url: encodeURI("http://weixin.sogou.com/weixin?type=2&query=贫困")
    }; 
    
request(options, function (err, res, body) {
    if (err) {
        console.log(err)
    }else {
        let $ = cheerio.load(body);
        $('.txt-box').each(function(i, elem) {
            if(true){
                console.log(($(this).children("h3").children('a').attr('href')))
                console.log(($(this).children("h3").children('a').text()))
                console.log(($(this).children(".txt-info").text().replace(/\s+/g,"")))
                console.log(($(this).parent().children(".img-box").children("a").children('img').attr('src').split('&url=')[1]))
                // console.log(($(this).children(".c_abstract").text().replace(/\s+/g,"")).split('来源')[0])
                console.log('\n')
            }
        });
    }
})
