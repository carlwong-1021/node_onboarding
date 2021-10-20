import { ArticlesService } from './articles.service';
import { present, presentCollection } from '../entities/articles.entity';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ArticleDto } from './dto/article.dto';

@Controller('api/articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  async getArticles() {
    const result = await this.articlesService.getArticles();
    return presentCollection(result);
  }

  @Get(':id')
  async getArticlesById(@Param() params) {
    try {
      const result = await this.articlesService.getArticlesById(params.id);
      if (result) return present(result);
      return {
        message: 'article not exist!',
        code: '001',
      };
    } catch (e) {
      console.log(e);
      return {
        message: 'article id not correct!',
        code: '001',
      };
    }
  }

  @Post()
  async addArticles(@Body() articleDto: ArticleDto) {
    const result = await this.articlesService.addArticles(articleDto);
    return present(result);
  }

  @Put(':id')
  async updateArticles(@Param() params, @Body() articleDto: ArticleDto) {
    const result = await this.articlesService.updateArticles(
      params.id,
      articleDto,
    );
    return present(result);
  }

  @Delete(':id')
  deleteArticlesById(@Param() params) {
    return this.articlesService.deleteArticlesById(params.id);
  }
}
