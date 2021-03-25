import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book)
        private booksModel: typeof Book
    ) { }

    public async findAll(): Promise<Book[]> {
        return this.booksModel.findAll();
    }

    public async findOne(id: number): Promise<Book> {
        return this.booksModel.findByPk(id);
    }

    public async create(book: Book) {
        this.booksModel.create(book);
    }

    public async update(book: Book): Promise<[number, Book[]]> {
        return this.booksModel.update(book, {
            where: {
                id: book.id
            }
        });
    }

    public async delete(id: number) {
        const book: Book = await this.findOne(id);
        book.destroy();
    }
}