import { injectable, inject } from "inversify";
import "reflect-metadata";


@injectable()
class UserService{

    public logIn(userName:string,passWord:string){
        if(userName == "law" && passWord == "123456"){
            return true;
        }else{
            return false;
        }
    }
}

export default UserService;