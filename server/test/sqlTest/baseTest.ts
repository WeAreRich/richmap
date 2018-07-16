import 'mocha';
import {User} from "../../src/entity/User";
import {OrmServiceImpl} from "../../src/util/orm/OrmServiceImpl";

var assert = require('assert');
let service = new OrmServiceImpl(new User());
describe('fffTest', function() {
    describe('#fff()', function() {
        it('result should be true', function() {
            // let u=new User();
            // u.age=500;
            // u.firstName='law';
            // u.id=143;
            // u.lastName='ww';

            // var data = <User>(service.findByKey("143"));
            // console.log(data.constructor.name+"...")

            // //assert.Equal(data, true);
            // assert.notEqual(data,true);
            // console.log("fff 的测试结果为:"+data.age);


        });
    });
});