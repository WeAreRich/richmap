// file inversify.config.ts

import { Container } from "inversify";
import { User } from "../entity/User";
import { TYPES } from "./types";
import UserService from "../service/UserService";


const myContainer = new Container();
myContainer.bind<User>(TYPES.User).to(User);
myContainer.bind<UserService>(TYPES.UserService).to(UserService);
export { myContainer };