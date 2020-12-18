import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import CategoryEntity from './category.entity';
import ItemEntity from './item.entity';
import LabelEntity from './label.entity';

@Entity()
export default class TaskEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    // n:1 relation with category
    @ManyToOne(type => CategoryEntity, category => category.tasks)
    category: CategoryEntity;

    @ManyToMany(type => LabelEntity)
    @JoinTable()
    labels: LabelEntity[];

    @OneToMany(() => ItemEntity, item => item.task)
    items: ItemEntity[];
}