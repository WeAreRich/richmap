import 'mocha';
import { UserService } from "../../src/service/UserService";
var assert = require('assert');
let service = new UserService();
describe('UserServiceTest', function() {
  describe('#login()', function() {
    it('userName is law and password is 123456 should be right', function() {
      assert.equal(service.logIn("law","123456"), true);
    });
  });
});
