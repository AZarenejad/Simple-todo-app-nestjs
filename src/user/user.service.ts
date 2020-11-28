import { Injectable } from '@nestjs/common';
import CreateUserDto from "./dto/create-user.dto";
import UserEntity from "../db/user.entity";
import BookEntity from "../db/book.entity";
import GenreEntity from "../db/genre.entity";
import CreateGenreDto from "../genre/dto/create-genre.dto";

@Injectable()
export class UserServices {

    async insert(userDetails: CreateUserDto): Promise<UserEntity> {
        const userEntity: UserEntity = UserEntity.create();
        const {name} = userDetails;
        userEntity.name = name;
        await UserEntity.save(userEntity);
        return userEntity;
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return await UserEntity.find();
    }

    async getBooksOfUser(userID: number): Promise<BookEntity[]> {
        console.log(typeof(userID));
        const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
        return user.books;
    }

    async delete(userId : number) : Promise<void> {
        await UserEntity.delete(userId);
    }

    async update(userId: number, updateUserDto: CreateUserDto) {
        await UserEntity.update(userId, updateUserDto);
    }

}