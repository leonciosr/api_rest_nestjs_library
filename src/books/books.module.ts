import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Book } from "./book.model";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3307,
            username: process.env.USUARIO_BANCO_DADOS,
            password: process.env.SENHA_BANCO_DADOS,
            database: 'livraria',
            autoLoadModels: true,
            synchronize: true,
        }),
        SequelizeModule.forFeature([Book])
    ],
    controllers: [BooksController],
    providers: [BooksService]
})
export class BooksModule { }