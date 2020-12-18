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
    Post, Put, Request, UseGuards
} from '@nestjs/common';
import {UserServices} from "./user.service";
import CreateUserDto from "./dto/create-user.dto";
import {ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiParam, ApiResponse} from "@nestjs/swagger";
import CreateGenreDto from "../genre/dto/create-genre.dto";
import {AuthGuard} from "@nestjs/passport";
import {LocalAuthGuard} from "../auth/guards/local-auth.guard";
import {AuthService} from "../auth/auth.service";


@Controller('users')
export class UserController {
    constructor(
        private readonly usersServices: UserServices,
    ) {}

    @Header('Content-Type', 'application/json')
    @ApiCreatedResponse({ description: 'Will handle the creating of new User' })
    @Post()
    @ApiBody({type:CreateUserDto})
    postUser( @Body() user: CreateUserDto) {
        return this.usersServices.insert(user);
    }

    @ApiResponse({ status: 200, description: 'Returns the list of all the existing users' })
    @Get()
    @ApiBearerAuth()
    getAll() {
        return this.usersServices.getAllUsers();
    }

    @ApiResponse({ status: 200, description: 'Return all the books which are associated with the user' +
            ' provided through \'userID\' by the request' })
    @Get('books')
    getBooks(@Body('userId', ParseIntPipe) userId: number) {
        return this.usersServices.getBooksOfUser(userId);
    }
}