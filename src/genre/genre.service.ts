import { Injectable } from '@nestjs/common';
import CreateGenreDto from "./dto/create-genre.dto";
import GenreEntity from "../db/genre.entity";
import UpdateGenreDto from "./dto/update-genre.dto";

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

    async delete(genreId: number): Promise<GenreEntity> {
        const genre = await GenreEntity.findOne(genreId);
        await genre.remove();
        return genre;
    }

    async update(genreDetails: UpdateGenreDto): Promise<GenreEntity> {
        const { id, type } = genreDetails;
        const genre = await GenreEntity.findOne(id);
        if(genre != undefined) {
            genre.type = type;
            await GenreEntity.save(genre);
        }
        return genre;
    }

}
