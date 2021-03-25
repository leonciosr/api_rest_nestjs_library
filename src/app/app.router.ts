import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { AppModule } from './app.module';

const { APPLICATION_PREFIX = 'app' } = process.env;

const routes: Routes = [
  {
    'path': `/${APPLICATION_PREFIX}`,
    'children': [
      {
        'path': '/',
        'module': AppModule,
      },
    ],
  },
];

@Module({
  'imports': [RouterModule.forRoutes(routes), AppModule],
})
export class AppRouter {}
