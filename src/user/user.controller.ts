import {Body, Controller, Get, Header, Param, ParseIntPipe, Post} from '@nestjs/common';
import {UserServices} from "./user.service";
import CreateUserDto from "./dto/create-user.dto";
import {ApiBody, ApiCreatedResponse, ApiParam, ApiResponse} from "@nestjs/swagger";
import CreateGenreDto from "../genre/dto/create-genre.dto";

@Controller('users')
export class UserController {
    constructor(private readonly usersServices: UserServices) {}

    @Header('Content-Type', 'application/json')
    @ApiCreatedResponse({ status: 200, description: 'Will handle the creating of new User' })
    @Post()
    @ApiBody({type:CreateUserDto})
    postUser( @Body() user: CreateUserDto) {
        return this.usersServices.insert(user);
    }


    @ApiResponse({ status: 200, description: ' returns the list of all the existing users' })
    @Get()
    getAll() {
        return this.usersServices.getAllUsers();
    }

    @ApiResponse({ status: 200, description: 'return all the books which are associated with the user' +
            ' provided through \'userID\' by the request' })
    @Get('/books/:userId')
    @ApiParam({name:'userId', required:true, type: Number})
    getBooks( @Param('userId', ParseIntPipe) userId: number) {
        return this.usersServices.getBooksOfUser(userId);
    }
}