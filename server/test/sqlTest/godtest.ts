import 'mocha';
import { God } from "../../src/util/sql/basicsql/basesql/God";
var assert = require('assert');
let service = new God();
describe('UserServiceTest', function() {
    describe('#login()', function() {
        it('userName is law and password is 123456 should be right', function() {
            let data  = God.godBasic("select * from user;");
            assert.notEqual(data, 0);
            console.log(data);
            God.closeConnection();
        });
    });
});
