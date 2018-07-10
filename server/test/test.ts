import 'mocha';
import { myContainer } from '../src/ioc_config/inversify.config';
import { TYPES } from '../src/ioc_config/types';
import UserService from '../src/service/UserService';



// import { myContainer } from "../src/ioc/inversify.config";
// // import { UserService } from "../src/service/UserService";
// import { TYPES } from "../src/ioc/types";
// // import { User } from '../src/entity/User';
// import { print } from 'util';
// import { UserService } from '../src/service/UserService';

var assert = require('assert');
// let service = new UserService();

// import('../src/service/UserService')
//   .then(({UserService}) => {
//      let a= new  UserService();
//      console.log(a.logIn("law","123456"))
//   })

// const fs = require('fs')
// function scanControllers (router, dir) {
//     let files = fs.readdirSync(__dirname + '/' + dir)
//     files.forEach(
//         file => {
//             let path = dir + '/' + file
//             // console.log(path)
//             if(file.endsWith('.ts')) {
//                 console.log(`process controller: ${file}...`);
//                 let cName = file.split('.')[0]
//                 TYPES[cName] = Symbol.for(cName)
//                 console.log(__dirname + '/' + dir+"/"+cName)
//                 import(__dirname + '/' + dir+"/"+cName)
//                 .then((c) => {  
//                    myContainer.bind<cName>(TYPES[cName]).to(c);
//                 }) 
//             } else {
//               var stat = fs.lstatSync(__dirname + '/' + path);
//               if(stat.isDirectory())
//                 scanControllers(router, path)
//             }
//         }
//     )
//   }

// scanControllers("","../entity")
// scanControllers("","../src/service")

// let service = myContainer.get<UserService>(TYPES['UserService']);
// describe('UserServiceTest', function() {
//   describe('#login()', function() {
//     it('userName is law and password is 123456 should be right', function() {
//       assert.equal(service.logIn("law","123456"), true);
//     });
//   });
// });

let service:UserService  = myContainer.get<UserService>(TYPES.UserService);
describe('UserServiceTest', function() {
  describe('#login()', function() {
    it('userName is law and password is 123456 should be right', function() {
      assert.equal(service.logIn("law","123456"), true);
    });
  });
});



