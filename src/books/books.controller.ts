import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    Post,
    Put,
    Query
} from '@nestjs/common';
import {UserServices} from "../user/user.service";
import {BooksService} from "./books.service";
import {ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiParam, ApiQuery, ApiResponse} from "@nestjs/swagger";
import CreateUserDto from "../user/dto/create-user.dto";
import CreateBookDto from "./dto/create-book.dto";
import UpdateBookDto from "./dto/update-book.dto";

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService) {}

    @Header('Content-Type', 'application/json')
    @ApiCreatedResponse({ description: 'Will handle the creating of new Book' })
    @Post()
    @ApiBody({type:CreateBookDto})
    @ApiBearerAuth()
    postUser( @Body() book: CreateBookDto) {
        return this.bookService.insert(book);
    }


    @ApiResponse({ status: 200, description: 'Returns the list of all the existing books' })
    @Get()
    @ApiBearerAuth()
    getAll() {
        return this.bookService.getAllBooks();
    }


    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "Existing book will be deleted" })
    @ApiQuery({
        name: 'bookId',
        required: true,
        type: Number,
        description: `id of book being deleted`
    })
    @Delete('delete')
    deleteBook(@Query('bookId') bookId) {
        return this.bookService.delete(bookId);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "Existing book will be updated" })
    @Put()
    updateBook(@Body() book: UpdateBookDto) {
        return this.bookService.update(book);
    }
}


