import {Body, Controller, Get, Header, Post} from '@nestjs/common';
import {UserServices} from "../user/user.service";
import {BooksService} from "./books.service";
import {ApiBody, ApiCreatedResponse, ApiResponse} from "@nestjs/swagger";
import CreateUserDto from "../user/dto/create-user.dto";
import CreateBookDto from "./dto/create-book.dto";

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService) {}

    @Header('Content-Type', 'application/json')
    @ApiCreatedResponse({ status: 200, description: 'Will handle the creating of new Book' })
    @Post()
    @ApiBody({type:CreateBookDto})
    postUser( @Body() book: CreateBookDto) {
        return this.bookService.insert(book);
    }

    @ApiResponse({ status: 200, description: ' returns the list of all the existing books' })
    @Get()
    getAll() {
        return this.bookService.getAllBooks();
    }


}


