import { IsNotEmpty } from 'class-validator';

export class ArticleDto {
  @IsNotEmpty()
  slug: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  content: string;

  comment_ids?: object;

  @IsNotEmpty()
  tags: string[];
}
