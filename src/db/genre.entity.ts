import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export default class GenreEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {unique: true}
    )
    type: string;

}