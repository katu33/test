import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZyllemApiService } from './app.service';
import { NormalArticleComponent } from './components/normal-article/normal-article.component';
import { FeaturedArticleComponent } from './components/featured-article/featured-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalArticleComponent,
    FeaturedArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ZyllemApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
