import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NormalArticle } from 'src/app/model/article';

@Component({
  selector: 'app-normal-article',
  templateUrl: './normal-article.component.html',
  styleUrls: ['./../../app.component.css']
})
export class NormalArticleComponent implements OnInit {
  @Input() article: NormalArticle;
  @Input() articleTemplate:TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
