import { OrmService } from "./OrmService";
import { BaseOrmClass } from "./BaseOrmClass";
import { createConnection } from "typeorm";
import { User } from "../../entity/User";
import { getType } from "mime";
import construct = Reflect.construct;
import { promises } from "fs";


export class OrmServiceImpl implements OrmService {

  template: BaseOrmClass;

  constructor(template: BaseOrmClass) {
    this.template = template;
  }

  checkKeyExists(key: string): boolean {

    return true
  }

  delete(key: string): boolean {

    let res = true;
    createConnection(

    ).then(async connection => {
      let en = connection.createEntityManager();
      // console.log(this.template.constructor.name)

      await en.delete(this.template.constructor.name, key);


    }).catch(error => console.log(error));

    console.log("方法已经结束");
    return res;
  }

  async findByKey(key: string): Promise<User> {
    let res;
    const connection = await createConnection();
    let en = connection.createEntityManager();
    res = await en.findOneOrFail(this.template.constructor.name, 143);
    console.log(res.constructor.name + "??");

    return res;
  }

  insert(obj: BaseOrmClass): boolean {

    let res = true;
    createConnection(

    ).then(async connection => {
      let en = connection.createEntityManager();


      await en.save(obj);


    }).catch(error => console.log(error));

    console.log("方法已经结束");
    return res;
  }

  update(obj: BaseOrmClass): boolean {
    let res = true;

    createConnection(

    ).then(async connection => {
      let en = connection.createEntityManager();


      await en.delete(this.template.constructor.name, en.getId(obj));
      await en.save(obj);


    }).catch(error => console.log(error));

    console.log("方法已经结束");

    return res;
  }


}