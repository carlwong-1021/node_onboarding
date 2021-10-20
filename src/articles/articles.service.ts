import { Articles, ArticlesDocument } from './../schema/articles.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Articles.name) private articleModel: Model<ArticlesDocument>,
  ) {}

  async getArticles(): Promise<Articles[]> {
    return this.articleModel.find().exec();
  }

  async getArticlesById(id: string): Promise<Articles> {
    const query: any = { _id: id };
    return this.articleModel.findOne(query).exec();
  }

  async addArticles(article: ArticleDto): Promise<Articles> {
    const createdArticle = new this.articleModel(article);
    return createdArticle.save();
  }

  async updateArticles(id: string, article: ArticleDto): Promise<Articles> {
    const filter: any = { _id: id };
    return this.articleModel.findOneAndUpdate(filter, article).exec();
  }

  async deleteArticlesById(id: string) {
    return this.articleModel.deleteOne({ _id: id }).exec();
  }
}
