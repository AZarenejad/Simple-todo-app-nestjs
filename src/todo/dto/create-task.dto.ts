import { Optional } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export default class CreateTaskDto {
    @ApiProperty({ type: String })
    readonly title: string;

    @ApiProperty({ type: Number })
    readonly categoryID: number;

    @Optional()
    @ApiPropertyOptional({ type: Array(String) })
    readonly items: string[];

    @Optional()
    @ApiPropertyOptional({ type: Array(Number) })
    readonly labelsIDs: number[];
}