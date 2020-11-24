import {Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export default class CreateUserDto {
    @Length(3, 10)
    @ApiProperty({description:'Name of User >', minLength: 3, default: 'Alireza' , maxLength:10})
    readonly name: string;


    readonly books: number[];
}