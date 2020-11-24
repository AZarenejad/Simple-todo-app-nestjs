import {IsArray, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export default class CreateUserDto {
    @Length(3, 10)
    @ApiProperty({
        description:'Name of User',
        type : String,
        minLength: 3,
        maxLength: 10
    })
    readonly name: string;
}