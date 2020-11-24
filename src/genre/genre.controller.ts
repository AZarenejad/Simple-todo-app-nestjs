import {Body, Controller, Get, Post} from '@nestjs/common';
import CreateGenreDto from "./dto/create-genre.dto";
import GenreServices from "./genre.service";
import {ApiBody, ApiCreatedResponse, ApiResponse} from "@nestjs/swagger";

@Controller('genre')
export default class GenreController {
    constructor(private readonly genreServices: GenreServices) {}

    @ApiCreatedResponse({ status: 200, description: 'Will handle the creating of new Genre' })
    @Post()
    @ApiBody({type:CreateGenreDto})
    postGenre( @Body() genre: CreateGenreDto) {
        return this.genreServices.insert(genre);
    }

    @ApiResponse({ status: 200, description: 'returns the list of all the existing genres' })
    @Get()
    getAll() {
        return this.genreServices.getAllGenre();
    }
}
