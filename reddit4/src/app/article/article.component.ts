import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // you can see we`re looping around the article components and transder
  // this value of articles
  
  // adding any value yet when we want the value come from app.compoinent.html here
  // but we don´t want to initialize it here how do we ,
  // solve this problem we use an exclamation mark that means it
  // doesn´t have to be initialized here
  @Input()  article!: Article

  vote_up(){
   this.article.voteUp()
  }

  vote_down(){
   this.article.voteDown()
  }


  ngOnInit(): void {
   
  }

}
