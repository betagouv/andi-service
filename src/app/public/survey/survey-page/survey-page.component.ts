import { Component, OnInit, Input } from '@angular/core';
import { QuestionStep, QuestionType } from 'src/models/question-step.model';

@Component({
  selector: 'andi-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent implements OnInit {

  questionSteps = new QuestionStep('Test', 'Toto', QuestionType.REDIRECT, undefined);
  
  constructor() { }

  ngOnInit() {
  }

}
