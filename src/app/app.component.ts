import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'word-count-validator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];
 
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
