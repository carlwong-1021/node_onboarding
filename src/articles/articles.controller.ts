import { ArticlesService } from './articles.service';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  getArticles() {
    return this.articlesService.getArticles();
  }

  @Get(':id')
  getArticlesById(@Param() params) {
    return this.articlesService.getArticlesById(params.id);
  }

  @Post()
  addArticles(@Body() article) {
    return this.articlesService.addArticles(article);
  }

  @Put(':id')
  async updateArticles(@Param() params, @Body() article) {
    return this.articlesService.updateArticles(params.id, article);
  }

  @Delete(':id')
  deleteArticlesById(@Param() params) {
    return this.articlesService.deleteArticlesById(params.id);
  }
}
