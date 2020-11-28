import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import CreateGenreDto from "./dto/create-genre.dto";
import GenreServices from "./genre.service";
import {ApiBody, ApiCreatedResponse, ApiParam, ApiResponse} from "@nestjs/swagger";
import CreateBookDto from "../books/dto/create-book.dto";
import {STATUS_CODES} from "http";

@Controller('genre')
export default class GenreController {
    constructor(private readonly genreServices: GenreServices) {}

    @ApiCreatedResponse({ description: 'Will handle the creating of new Genre' })
    @Post()
    @ApiBody({type:CreateGenreDto})
    postGenre( @Body() genre: CreateGenreDto) {
        return this.genreServices.insert(genre);
    }

    @ApiResponse({ status: 200, description: 'Returns the list of all the existing genres' })
    @Get()
    getAll() {
        return this.genreServices.getAllGenre();
    }

    @Delete(':genreId')
    @ApiResponse({ status: 200, description: 'Existing genres will be deleted' })
    @ApiParam({name:'genreId', required:true, type: Number})
    deleteGenre(@Param('genreId') genreId: number) {
        return this.genreServices.delete(genreId);
    }

    @Put(':genreId')
    @ApiResponse({ status: 200, description: 'Existing genres will be updated' })
    @ApiParam({name:'genreId', required:true, type: Number})
    @ApiBody({type:CreateGenreDto})
    updateGenre(@Param('genreId') id: number, @Body() updateGenreDto: CreateGenreDto) {
        return this.genreServices.update(id, updateGenreDto);
    }

}
