import {ApiProperty} from "@nestjs/swagger";


export default class CreateGenreDto {
    @ApiProperty({
        description:'Name of Genre',
        type : "string"
    })
    readonly type: string;
}