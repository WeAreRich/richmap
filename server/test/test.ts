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
let user:User = new User();
user.id = 1; user.age = 12;
user.firstName = "aa"; user.lastName = "bbb";
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
let service:OrmServiceImpl = new OrmServiceImpl(new User());
service.checkKeyExists("2").then(v=>{
  console.log(v)
})
service.insert(user).then(v=>{
  service.checkKeyExists("3").then(v=>{
    console.log(v)
  })
});
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