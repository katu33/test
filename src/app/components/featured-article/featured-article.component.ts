import { Component, OnInit, Input } from '@angular/core';
import { FeaturedArticle } from 'src/app/model/article';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./../../app.component.css']
})
export class FeaturedArticleComponent implements OnInit {
  @Input() article: FeaturedArticle;
  constructor() { }

  ngOnInit() {
  }

}
