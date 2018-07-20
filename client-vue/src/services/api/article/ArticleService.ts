import { MapTypeOption } from 'src/models/MapTypeOption';
import http from '@/services/api/HttpService';
import { Article } from '@/models/Article';

export interface ArticleService {
  getArticle(): Promise<Article>;
}

export class ArticleServiceImpl {

}
