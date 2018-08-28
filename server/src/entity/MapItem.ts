import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {BaseOrmClass} from "../util/orm/BaseOrmClass";

@Entity()
export class MapItem extends BaseOrmClass{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: string;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    url: string;

    public static convertToUser(params:BaseOrmClass):MapItem{
        let number = new MapItem();
        let properties = Object.getOwnPropertyNames(params)
        properties.forEach(function (value) {
            number[value] = params[value]
        });
        return number;
    }
}
