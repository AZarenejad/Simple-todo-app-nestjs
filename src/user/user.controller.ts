import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post, Put
} from '@nestjs/common';
import {UserServices} from "./user.service";
import CreateUserDto from "./dto/create-user.dto";
import {ApiBody, ApiCreatedResponse, ApiParam, ApiResponse} from "@nestjs/swagger";
import CreateGenreDto from "../genre/dto/create-genre.dto";

@Controller('users')
export class UserController {
    constructor(private readonly usersServices: UserServices) {}

    @Header('Content-Type', 'application/json')
    @ApiCreatedResponse({ description: 'Will handle the creating of new User' })
    @Post()
    @ApiBody({type:CreateUserDto})
    postUser( @Body() userDto: CreateUserDto) {
        return this.usersServices.insert(userDto);
    }


    @ApiResponse({ status: 200, description: 'Returns the list of all the existing users' })
    @Get()
    getAll() {
        return this.usersServices.getAllUsers();
    }

    @ApiResponse({ status: 200, description: 'Return all the books which are associated with the user' +
            ' provided through \'userID\' by the request' })
    @Get('/:userId/books')
    @ApiParam({name:'userId', required:true, type: Number})
    getBooks( @Param('userId', ParseIntPipe) userId: number) {
        return this.usersServices.getBooksOfUser(userId);
    }


    @Delete(':userId')
    @ApiResponse({ status: 200, description: 'Existing user will be deleted' })
    @ApiParam({name:'userId', required:true, type: Number})
    deleteUser(@Param('userId') userId: number) {
        return this.usersServices.delete(userId);
    }

    @Put(':userId')
    @ApiResponse({ status: 200, description: 'Existing user will be updated' })
    @ApiParam({name:'userId', required:true, type: Number})
    @ApiBody({type:CreateUserDto})
    updateUser(@Param('userId') id: number, @Body() updateUserDto: CreateUserDto) {
        return this.usersServices.update(id, updateUserDto);
    }
}