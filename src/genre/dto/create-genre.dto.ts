import {ApiProperty} from "@nestjs/swagger";


export default class CreateGenreDto {
    @ApiProperty({
        description:'Name of Genre',
        type : String
    })
    readonly type: string;
}