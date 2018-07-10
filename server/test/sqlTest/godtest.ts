import 'mocha';
import { God } from "../../src/util/sql/basicsql/basesql/God";
var assert = require('assert');
let service = new God();
describe('UserServiceTest', function() {
    describe('#login()', function() {
        it('userName is law and password is 123456 should be right', function() {
            let data  = service.godbasic("select * from user;");
            assert.notEqual(data, 0);
            console.log(data);
            service.closeConnection();
        });
    });
});
