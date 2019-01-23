import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './questions/question-dropdown';
import { QuestionBase }     from './questions/question-base';
import { TextboxQuestion }  from './questions/question-textbox';
import { TextareaQuestion }  from './questions/question-textarea';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextareaQuestion({
        key: 'profile',
        label: 'Profile',
        value: 'Bombasto\'s profile',
        type: 'textarea',
        order: 4,
        min: 1,
        max: 80
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}