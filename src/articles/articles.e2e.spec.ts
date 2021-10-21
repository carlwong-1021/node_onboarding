import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { Articles, ArticlesSchema } from './../schema/articles.schema';

describe('ArticlesController Test', () => {
  let app: INestApplication;

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
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  test('/GET /api/articles/616e7c728fdecec7421890da', () => {
    return request(app.getHttpServer())
      .get('/api/articles/616e7c728fdecec7421890da')
      .expect(200)
      .expect((res) => {
        res.body.id === '616e7c728fdecec7421890da';
      });
  });
});
