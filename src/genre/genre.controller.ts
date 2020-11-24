import {Body, Controller, Get, Post} from '@nestjs/common';
import CreateGenreDto from "./dto/create-genre.dto";
import GenreServices from "./genre.service";

@Controller('genre')
export default class GenreController {
    constructor(private readonly genreServices: GenreServices) {}
    @Post('post')
    postGenre( @Body() genre: CreateGenreDto) {
        return this.genreServices.insert(genre);
    }
    @Get()
    getAll() {
        return this.genreServices.getAllGenre();
    }
}
