"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    console.log("Inserting a new user into the database...");
    const user = new User_1.User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    yield connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    console.log("Loading users from the database...");
    const users = yield connection.manager.find(User_1.User);
    console.log("Loaded users: ", users);
    console.log("Here you can setup and run express/koa/any other framework.");
})).catch(error => console.log(error));
