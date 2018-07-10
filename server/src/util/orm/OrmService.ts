import {BaseOrmClass} from "./BaseOrmClass";

export interface OrmService{
    insert (obj:BaseOrmClass):boolean;
    delete (key:string):boolean;
    update (obj:BaseOrmClass):boolean;
    findByKey (key:string):BaseOrmClass;
    //search 条件查找
    checkKeyExists (key:string):boolean;
    //getAllObjects



}