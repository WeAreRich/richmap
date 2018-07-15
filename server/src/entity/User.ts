import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {BaseOrmClass} from "../util/orm/BaseOrmClass";

@Entity()
export class User extends BaseOrmClass{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    public static convertToUser(params:BaseOrmClass):User{
        let user = new User();
        let properties = Object.getOwnPropertyNames(params)
        properties.forEach(function (value) {
            user[value] = params[value]
        }); 
        return user;
    }
}
