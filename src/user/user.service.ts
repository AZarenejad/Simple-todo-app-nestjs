import { Injectable } from '@nestjs/common';
import CreateUserDto from "./dto/create-user.dto";
import UserEntity from "../db/user.entity";
import BookEntity from "../db/book.entity";

@Injectable()
export class UserServices {


    async insert(userDetails: CreateUserDto): Promise<UserEntity> {
        const userEntity: UserEntity = UserEntity.create();
        const {name, username, password} = userDetails;
        userEntity.name = name;
        userEntity.username = username;
        userEntity.password = password;
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

    async findOne(username: string): Promise<UserEntity | undefined> {
        return await UserEntity.findOne({ where: { username: username } });
    }

}