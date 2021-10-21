import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Test } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { Articles, ArticlesSchema } from './../schema/articles.schema';

describe('ArticlesController Test', () => {
  let articlesController: ArticlesController;
  let articlesService: ArticlesService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/onboarding'),
        MongooseModule.forFeature([
          { name: Articles.name, schema: ArticlesSchema },
        ]),
      ],
      controllers: [ArticlesController],
      providers: [ArticlesService],
    }).compile();
    articlesService = moduleRef.get<ArticlesService>(ArticlesService);
    articlesController = moduleRef.get<ArticlesController>(ArticlesController);
  });

  describe('getArticles', () => {
    test('should return an array of articles', async () => {
      expect(await articlesController.getArticles()).toMatchObject({
        items: expect.arrayContaining([expect.any(Object)]),
      });
    });
  });
});
