import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import TaskEntity from "./task.entity";

@Entity()
export default class CategoryEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // 1:n relation with task
    @OneToMany(() => TaskEntity, task => task.category)
    tasks: TaskEntity[];
}