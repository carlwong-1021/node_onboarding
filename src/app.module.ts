import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/onboarding'),
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
