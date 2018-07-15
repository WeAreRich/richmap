import { provide, inject } from '../ioc/ioc';
import TYPES from '../constant/types';
import { User } from '../entity/User';
import { OrmService } from '../util/orm/OrmService';
import { OrmServiceImpl } from '../util/orm/OrmServiceImpl';

@provide(TYPES.UserService)
export class UserService {
  private ormService: OrmService;

  constructor(
  ) {
    this.ormService = new OrmServiceImpl(new User());
  }

  public getUsers(): Promise<User[]> {
    // return new Promise<User[]>((resolve, reject) => {
    //   this.mongoClient.find('user', {}, (error, data: User[]) => {
    //     resolve(data);
    //   });
    // });
    return undefined;
  }

  public getUser(id: string): Promise<User> {
    console.log(id);
    return  this.ormService.findByKey(id);
  }

  public newUser(user: User): Promise<User> {
    // return new Promise<User>((resolve, reject) => {
    //   this.mongoClient.insert('user', user, (error, data: User) => {
    //     resolve(data);
    //   });
    // });
    return undefined;
  }

  public updateUser(id: string, user: User): Promise<User> {
    // return new Promise<User>((resolve, reject) => {
    //   this.mongoClient.update('user', id, user, (error, data: User) => {
    //     resolve(data);
    //   });
    // });
    return undefined;
  }

  public deleteUser(id: string): Promise<any> {
    // return new Promise<any>((resolve, reject) => {
    //   this.mongoClient.remove('user', id, (error, data: any) => {
    //     resolve(data);
    //   });
    // });
    return undefined;
  }
}
