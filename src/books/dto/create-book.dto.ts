import {IsArray, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export default class CreateBookDto {
    @ApiProperty({
        description:'Name of Book',
        type : String
    })
    readonly name: string;

    @ApiProperty({
        description:'UserId of Book',
        type : Number
    })
    readonly userID: number;

    @ApiProperty({
        description:'List of Genres Id',
        type : [Number]
    })
    @IsArray()
    readonly genreIDs: number[];
}