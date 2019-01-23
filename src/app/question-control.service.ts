import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './questions/question-base';
import { wordcountValidator } from 'ngx-wcvalidator';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      if(question.controlType == 'textarea')
      {
        group[question.key] = new FormControl(question.value || '', wordcountValidator(question.min, question.max));
      }
      else
      {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                : new FormControl(question.value || '');
      }
    });
    return new FormGroup(group);
  }
}