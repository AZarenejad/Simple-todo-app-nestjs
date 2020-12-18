import { ApiProperty } from '@nestjs/swagger';

export default class UpdateGenreDto {
    @ApiProperty({
        type: "number" ,description:"id of genre"
    })
    readonly id: number;

    @ApiProperty({
        type: "string" ,
        description:"New name for genre"})
    readonly type: string;
}