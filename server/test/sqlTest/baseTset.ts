import 'mocha';
import {User} from "../../src/entity/User";
import {OrmServiceImpl} from "../../src/util/orm/OrmServiceImpl";
//import {User} from "../../src/entity/User";
var assert = require('assert');
let service = new OrmServiceImpl(new User());
describe('fffTest', function() {
    describe('#fff()', function() {
        it('result should be true', function() {
            let u=new User();
            u.age=500;
            u.firstName='law';
            u.id=143;
            u.lastName='ww';
            let data  = service.insert(u);
            //assert.Equal(data, true);
            assert.equal(data,true);
            console.log("fff 的测试结果为:"+data);

        });"User"
    });
});