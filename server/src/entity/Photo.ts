// ///<reference path="../../node_modules/typeorm/schema-builder/table/Table.d.ts"/>
// import {Table, Column, PrimaryGeneratedColumn} from "typeorm";
//
// @Table()
// export class Photo {
//
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column({
//     length: 500
//   })
//   name: string;
//
//   @Column("text")
//   description: string;
//
//   @Column()
//   fileName: string;
//
//   @Column("int")
//   views: number;
//
//   @Column()
//   isPublished: boolean;
// }