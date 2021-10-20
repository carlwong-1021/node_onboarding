import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ArticlesDocument = Articles & Document;

@Schema({ timestamps: true })
export class Articles {
  @Prop()
  slug: string;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  content: string;

  @Prop({ type: mongoose.Types.ObjectId })
  comment_ids: object;

  @Prop()
  tags: string[];
}

export const ArticlesSchema = SchemaFactory.createForClass(Articles);
