import { Component } from '@angular/core';
import { ZyllemApiService } from './app.service';
import { Article, ArticleType } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [];

  get normal_articles() {
    return this.articles.filter(article => article.type === ArticleType.NORMAL);
  }

  get feature_articles() {
    return this.articles.filter(article => article.type === ArticleType.FEATURED);
  }

  constructor(private zyllemApiService: ZyllemApiService) {

  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.zyllemApiService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

  open(url: string) {
    window.open(url);
  }
}
