import { Articles, ArticlesDocument } from './../schema/articles.schema';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

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

  async addArticles(article): Promise<Articles> {
    const createdArticle = new this.articleModel(article);
    return createdArticle.save();
  }

  async updateArticles(id: string, article): Promise<Articles> {
    const filter: any = { _id: id };
    return this.articleModel.findOneAndUpdate(filter, article).exec();
  }

  async deleteArticlesById(id: string) {
    return this.articleModel.deleteOne({ _id: id }).exec();
  }
}
