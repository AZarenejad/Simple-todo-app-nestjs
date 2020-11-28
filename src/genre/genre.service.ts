import { Injectable } from '@nestjs/common';
import CreateGenreDto from "./dto/create-genre.dto";
import GenreEntity from "../db/genre.entity";
import BookEntity from "../db/book.entity";
import CreateBookDto from "../books/dto/create-book.dto";

@Injectable()
export default class GenreServices {
    async insert(genreDetails: CreateGenreDto): Promise<GenreEntity> {
        const genreEntity: GenreEntity = GenreEntity.create();
        const {type} = genreDetails;
        genreEntity.type = type;
        await GenreEntity.save(genreEntity);
        return genreEntity;
    }

    async getAllGenre(): Promise<GenreEntity[]> {
        return await GenreEntity.find();
    }

    async delete(genreId : number) : Promise<void> {
        await GenreEntity.delete(genreId);
    }

    async update(genreId: number, updateGenreDto: CreateGenreDto) {
        await GenreEntity.update(genreId,updateGenreDto);
    }

}
