import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FeaturedArticle } from 'src/app/model/article';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./../../app.component.css']
})
export class FeaturedArticleComponent implements OnInit {
  @Input() article: FeaturedArticle;
  @Input() articleTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
