import {IsArray, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export default class CreateUserDto {
    @Length(3, 10)
    @ApiProperty({
        description:'Name of User',
        type : "string",
        minLength: 3,
        maxLength: 10
    })
    readonly name: string;

    @ApiProperty({
        type: "array",
        items: {type: "number"},
        description: "User Books IDs"
    })
    readonly books: number[];

    @ApiProperty({
        description: 'username of User',
        type: String
    })
    readonly username: string;

    @ApiProperty({
        description: 'password of User',
        type: "string"
    })
    readonly password: string;


}