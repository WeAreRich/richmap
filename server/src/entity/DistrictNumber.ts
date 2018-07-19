import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {BaseOrmClass} from "../util/orm/BaseOrmClass";

@Entity()
export class DistrictNumber extends BaseOrmClass{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    level: number;

    @Column()
    father: number;

    public static convertToUser(params:BaseOrmClass):DistrictNumber{
        let number = new DistrictNumber();
        let properties = Object.getOwnPropertyNames(params)
        properties.forEach(function (value) {
            number[value] = params[value]
        }); 
        return number;
    }
}
