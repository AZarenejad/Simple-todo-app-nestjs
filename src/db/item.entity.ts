import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import TaskEntity from "./task.entity";

@Entity()
export default class ItemEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(() => TaskEntity, task => task.items)
    task: TaskEntity;
}