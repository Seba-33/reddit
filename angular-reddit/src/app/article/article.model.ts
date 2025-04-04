import { Component} from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [], 
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class Article {
    title: string;
    link: string;
    votes: number;
  
    constructor(title: string, link: string, votes?: number) {
      this.title = title;
      this.link = link;
      this.votes = votes || 0;
    }
}