import {ApiProperty} from "@nestjs/swagger";


export default class UpdateBookDto {
    @ApiProperty({
        type: "number",
        description: "Id of Book"
    })
    readonly id: number;

    @ApiProperty({
        type: "string",
        description: "Name of Book"
    })
    readonly name: string;

    @ApiProperty({
        type: "number",
        description: "UserId of Book"
    })
    readonly userId: number;

    @ApiProperty({
        type: "array",
        items: {type: "number"},
        description: "List of Genres Id"
    })
    readonly genreIds: number[];

}