import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from '../books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
