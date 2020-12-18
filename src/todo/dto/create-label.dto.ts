import { ApiProperty } from "@nestjs/swagger";

export default class CreateLabelDto {
    @ApiProperty({type: "string"})
    readonly name: string;
}