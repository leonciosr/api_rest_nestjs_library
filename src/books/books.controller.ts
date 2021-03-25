import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './book.model';
import { BooksService as BooksService } from "./books.service";

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {
    }

    @Get()
    public async findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')
    public async findOne(@Param() params): Promise<Book> {
        return this.booksService.findOne(params.id);
    }

    @Post()
    public async create(@Body() book: Book) {
        this.booksService.create(book);
    }

    @Put()
    public async update(@Body() book: Book): Promise<[number, Book[]]> {
        return this.booksService.update(book);
    }

    @Delete(':id')
    public async delete(@Param() params) {
        this.booksService.delete(params.id);
    }
}