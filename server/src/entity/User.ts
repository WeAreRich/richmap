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

}
