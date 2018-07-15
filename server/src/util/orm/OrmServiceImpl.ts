import {OrmService} from "./OrmService";
import {BaseOrmClass} from "./BaseOrmClass";
import { createConnection, Connection } from "typeorm";
import {User} from "../../entity/User";
import {getType} from "mime";
import construct = Reflect.construct;
import {promises} from "fs";
import {TypeOrmConnection} from '../orm/connection'
import { resolve } from "dns";


export class OrmServiceImpl implements  OrmService{

    template:BaseOrmClass
    constructor(template:BaseOrmClass){
        this.template=template; 
    }

    async checkKeyExists(key: string): Promise<boolean> {
        const connection  = await TypeOrmConnection.getConnection();
        let en = connection.createEntityManager();
        let res = await en.findOne(this.template.constructor.name, key);
        let result = (res!=undefined);
        return new Promise<any>((resolve,reject)=>{
            resolve(result)
        });
    }

    async delete(key: string): Promise<boolean> {
        const connection  = await TypeOrmConnection.getConnection();
        let en = connection.createEntityManager();
        await en.delete(this.template.constructor.name,key);
        return new Promise<boolean>((resolve,reject)=>{
            resolve(true);
        });
    }

    async findByKey(key: string): Promise<any> {
        console.log(key)
        const connection  = await TypeOrmConnection.getConnection();
        let en = connection.createEntityManager();
        let res = await en.findOneOrFail(this.template.constructor.name, key);
        return new Promise<any>((resolve,reject)=>{
            resolve(res)
        });
    }

    async insert(obj: BaseOrmClass): Promise<boolean> {
        let res=true;
        let connection =await TypeOrmConnection.getConnection();
        let en=connection.createEntityManager();
        en.save(obj);
        return new Promise<boolean>((resolve,reject)=>{resolve(res)});
    }

    async update(obj: BaseOrmClass): Promise<boolean> {
        const connection  = await TypeOrmConnection.getConnection();
        let en = connection.createEntityManager();
        await en.delete(this.template.constructor.name,en.getId(obj));
        await en.save(obj);
        return new Promise<boolean>((resolve,reject)=>{
            resolve(true);
        });
    }
}