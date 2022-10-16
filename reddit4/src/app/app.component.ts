import { Component } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[]

  constructor() { 
    this.articles =[
      new Article('Angular ', 'http://angular.io', 3),
      new Article('Angular ', 'http://fullstack.io', 2),
      new Article('Angular ', 'http://angular.io', 3),
    ]
  }
  //title = 'reddit4';
  add_article(title: HTMLInputElement, link: HTMLInputElement){
   // console.log(title.value);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
  }

  sorted_articles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }
}
