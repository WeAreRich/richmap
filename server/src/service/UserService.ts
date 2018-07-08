

export class UserService{
    public logIn(userName:string,passWord:string){
        if(userName == "law" && passWord == "123456"){
            return true;
        }else{
            return false;
        }
    }
}