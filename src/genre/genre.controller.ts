import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Query
} from '@nestjs/common';
import CreateGenreDto from "./dto/create-genre.dto";
import GenreServices from "./genre.service";
import {ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiParam, ApiQuery, ApiResponse} from "@nestjs/swagger";
import CreateBookDto from "../books/dto/create-book.dto";
import {STATUS_CODES} from "http";
import UpdateGenreDto from "./dto/update-genre.dto";

@Controller('genre')
export default class GenreController {
    constructor(private readonly genreServices: GenreServices) {}

    @ApiCreatedResponse({ description: 'Will handle the creating of new Genre' })
    @Post()
    @ApiBearerAuth()
    @ApiBody({type:CreateGenreDto})
    postGenre( @Body() genre: CreateGenreDto) {
        return this.genreServices.insert(genre);
    }

    @ApiResponse({ status: 200, description: 'Returns the list of all the existing genres' })
    @ApiBearerAuth()
    @Get()
    getAll() {
        return this.genreServices.getAllGenre();
    }


    @ApiResponse({ status: 200, description: "Existing genre will be deleted" })
    @ApiBearerAuth()
    @ApiQuery({
        name: 'genreId',
        required: true,
        type: Number,
        description :`id of genre being deleted`
    })
    @Delete()
    deleteGenre(@Query('genreId') genreId) {
        return this.genreServices.delete(genreId);
    }

    @ApiResponse({ status: 200, description: "Existing genre will be updated" })
    @ApiBearerAuth()
    @Put()
    updateGenre(@Body() genre: UpdateGenreDto) {
        return this.genreServices.update(genre);
    }
}