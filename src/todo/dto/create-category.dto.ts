import { ApiProperty } from "@nestjs/swagger";

export default class CreateCategoryDto {
    @ApiProperty({type: "string"})
    readonly name: string;
}