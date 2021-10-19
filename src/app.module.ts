import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:admin@localhost:27017/onboarding?authSource=admin&readPreference=primary',
    ),
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
