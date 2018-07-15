import {BaseOrmClass} from "./BaseOrmClass";

export interface OrmService{
    insert (obj:BaseOrmClass):Promise<boolean>;
    delete (key:string):Promise<boolean>;
    update (obj:BaseOrmClass):Promise<boolean>;
    findByKey (key:string):Promise<any>;
    //search 条件查找
    checkKeyExists (key:string):Promise<boolean>;
    //getAllObjects
}